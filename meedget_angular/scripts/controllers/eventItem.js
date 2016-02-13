/**
 * Created by hitenpratap on 19/12/15.
 */

var eventItemApp = angular.module('eventItemApp', []);

eventItemApp.controller('addItemController', function ($scope, $routeParams, $http, $httpParamSerializerJQLike, toastr, $location, EventService) {
    var baseUrl = $('#appBaseUrl').val();
    var username = sessionStorage.getItem("username");
    $scope.formData = {username: username, eventId: $routeParams.eventId};

    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    EventService.getEventMembers($routeParams.eventId, function (response) {
        if (response.result == "SUCCESS") {
            $scope.formData.members = response.members;
        }
        else {
            toastr.error(response.message);
            $location.path("/item/add/" + $routeParams.eventId);
        }
    });

    $scope.resetAddItemForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.submitAddItemForm = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restEventItem/add",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                toastr.success(response.message);
                $location.path("/view/" + $routeParams.eventId);
            } else {
                toastr.error(response.message);
                $location.path("/item/add/" + $routeParams.eventId);
            }
        });
    }
});

eventApp.controller('editItemController', function ($scope, $http, $httpParamSerializerJQLike, $location, toastr, $routeParams, EventService) {
    var baseUrl = $('#appBaseUrl').val();
    $scope.formData = {};

    EventService.getItemDetails($routeParams.itemId, function (response) {
        if (response.result == "SUCCESS") {
            $scope.formData = response.item;
        }
        else {
            toastr.error(response.message);
            $location.path("/view/" + $routeParams.eventId);
        }
    });

    EventService.getEventMembers($routeParams.eventId, function (response) {
        if (response.result == "SUCCESS") {
            $scope.formData.members = response.members;
        }
        else {
            toastr.error(response.message);
            $location.path("/item/add/" + $routeParams.eventId);
        }
    });

    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    $scope.resetEditItemForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.submitEditEventForm = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restEventItem/update",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                toastr.success(response.message);
                $location.path("/view/" + $routeParams.eventId);
            } else {
                toastr.error(response.message);
                $location.path("/item/edit/" + $routeParams.eventId + "/" + $routeParams.eventId);
            }
        });
    }
});
