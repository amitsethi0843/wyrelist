/**
 * Created by hitenpratap on 16/12/15.
 */
var meedgetService = angular.module('meedgetServices', []);

meedgetService.service('EventService', function ($http, $rootScope, $location) {

    var baseUrl = $('#appBaseUrl').val();

    this.loadEventList = function (username, callback) {
        $http.get(baseUrl + "/restEvent/list", {params: {username: username}}).success(function (data) {
            callback(data);
        });
    };

    this.checkCurrentUser = function (authToken, callback) {
        $http.get(baseUrl + "/restAuth/checkCurrentUser", {params: {token: authToken}}).success(function (data) {
            callback(data);
        });
    };

    this.deleteEvent = function (eventId, callback) {
        $http.get(baseUrl + "/restEvent/delete", {params: {eventId: eventId}}).success(function (data) {
            callback(data);
        });
    };

    this.getEventDetails = function (username, eventId, callback) {
        $http.get(baseUrl + "/restEvent/edit", {
            params: {
                eventId: eventId,
                username: username
            }
        }).success(function (data) {
            callback(data);
        });
    };

    this.getfullEventDetails = function (username, eventId, callback) {
        $http.get(baseUrl + "/restEvent/view", {
            params: {
                eventId: eventId,
                username: username
            }
        }).success(function (data) {
            callback(data);
        });
    };

    this.getItemDetails = function (itemId, callback) {
        $http.get(baseUrl + "/restEventItem/edit", {params: {itemId: itemId}}).success(function (data) {
            callback(data);
        });
    };

    this.deleteItem = function (itemId, callback) {
        $http.get(baseUrl + "/restEventItem/delete", {params: {itemId: itemId}}).success(function (data) {
            callback(data);
        });
    };

    this.getUserList = function (term, eventId, username, callback) {
        $http.get(baseUrl + "/restEvent/getUserList", {
            params: {
                term: term,
                eventId: eventId,
                username: username
            }
        }).success(function (data) {
            callback(data);
        });
    };

    this.getEventTypeList = function (callback) {
        $http.get(baseUrl + "/restEvent/getEventTypeList", {})
            .success(function (data) {
                callback(data);
            });
    };

    this.handleWrongAuthEvent = function () {
        sessionStorage.removeItem('authToken');
        delete $rootScope.currentUserEmailAddress;
        sessionStorage.removeItem('username');
        $location.path("/login");
    };

    this.verifyUserEmailAddress = function (userId, callback) {
        $http.get(baseUrl + "/restAuth/verifyEmailAddress", {params: {personId: userId}}).success(function (data) {
            callback(data);
        });
    };

    this.getEventMembers = function (eventId, callback) {
        $http.get(baseUrl + "/restEventItem/getEventMembers", {params: {eventId: eventId}}).success(function (data) {
            callback(data);
        });
    };

    this.markEventCompleted = function (eventId, callback) {
        $http.get(baseUrl + "/restEvent/markEventCompleted", {
            params: {
                eventId: eventId
            }
        }).success(function (data) {
            callback(data);
        });
    };

});