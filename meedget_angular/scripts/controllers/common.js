/**
 * Created by hitenpratap on 13/01/16.
 */
var commonApp = angular.module('commonApp', []);

commonApp.controller('customMessageController', function ($scope, $routeParams) {
    $scope.message = sessionStorage.getItem("userAuthMsg");
});