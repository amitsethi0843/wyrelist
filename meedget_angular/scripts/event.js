/**
 * Created by hitenpratap on 14/12/15.
 */

var eventApp = angular.module('eventApp', ['ngRoute', 'meedgetServices', 'ui.autocomplete',
    'ngAnimate', 'toastr', 'eventItemApp', 'directiveApp', 'authApp', 'commonApp', 'door3.css', 'ngCookies', 'socialLogin']);

eventApp.config(function (socialProvider) {
    socialProvider.setGoogleKey("868707910036-vbft3r18q1ruf106vmkctrjmqkm0tipi.apps.googleusercontent.com");
    //socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
    socialProvider.setFbKey({appId: "1001920846546361", apiVersion: "v2.5"});
});

eventApp.config(function ($routeProvider) {
    var baseUrl = $('#appBaseUrl').val();
    $routeProvider.when('/', {
        templateUrl: "views/event/list.html",
        controller: 'listController'
    }).when('/404', {
        templateUrl: "views/common/404.html",
        data: {
            public: true
        },
        css: 'styles/404.css'
    }).when('/customMessage', {
        templateUrl: "views/common/message.html",
        controller: 'customMessageController',
        data: {
            public: true
        }
    }).when('/login', {
        templateUrl: "views/auth/login.html",
        controller: 'loginController',
        data: {
            public: true
        }
    }).when('/register/:guestUserId?/:emailAddress?', {
        templateUrl: "views/auth/register.html",
        controller: 'registerController',
        data: {
            public: true
        }
    }).when('/forgotPassword', {
        templateUrl: "views/auth/forgotPassword.html",
        controller: 'forgotPasswordController',
        data: {
            public: true
        }
    }).when('/resetPassword/:userId', {
        templateUrl: "views/auth/resetPassword.html",
        controller: 'resetPasswordController',
        data: {
            public: true
        }
    }).when('/user/:type/:id/:params1?', {
        templateUrl: "views/common/404.html",
        controller: 'userAuthController',
        data: {
            public: true
        },
        css: 'styles/404.css'
    }).when('/logout', {
        templateUrl: "views/auth/logout.html",
        controller: 'logoutController'
    }).when('/add', {
        templateUrl: "views/event/create.html",
        controller: 'addController'
    }).when('/edit/:eventId', {
        templateUrl: "views/event/edit.html",
        controller: 'editController'
    }).when('/view/:eventId', {
        templateUrl: "views/event/view.html",
        controller: 'viewController'
    }).when('/item/add/:eventId', {
        templateUrl: "views/eventItem/create.html",
        controller: 'addItemController'
    }).when('/item/edit/:eventId/:itemId', {
        templateUrl: "views/eventItem/edit.html",
        controller: 'editItemController'
    }).otherwise({
        redirectTo: '/'
    });
});

eventApp.run(function ($rootScope, $location, EventService, $http, $httpParamSerializerJQLike, toastr) {
    var baseUrl = $('#appBaseUrl').val();
    $rootScope.$on("$routeChangeStart", function (event, next, prev) {
        if (next.data == null || next.data.public == null || !next.data.public) {
            var authToken = sessionStorage.getItem("authToken");
            if (!authToken || authToken == "") {
                EventService.handleWrongAuthEvent();
            } else {
                EventService.checkCurrentUser(sessionStorage.getItem("authToken"), function (response) {
                    if (response.result == "ERROR") {
                        EventService.handleWrongAuthEvent();
                    } else {
                        sessionStorage.removeItem("username");
                        sessionStorage.setItem("username", response.username);
                        $rootScope.currentUserEmailAddress = sessionStorage.getItem("username");
                    }
                });
            }
        }
    });

    $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
        $http({
            url: baseUrl + "/restSocial/connect",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(userDetails)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                toastr.success(response.message);
                sessionStorage.setItem('authToken', response.token);
                sessionStorage.setItem('username', response.username);
                $location.path("/");
            } else {
                toastr.error(response.message);
                $location.path("/login");
            }
        });
    });

    $rootScope.$on('event:social-sign-out-success', function (event, logoutStatus) {
        console.log("SUCCESS LOGOUT");
    });
});

eventApp.controller('eventController', function ($scope) {
    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );
});

eventApp.controller('listController', function ($scope, EventService, toastr) {
    var username = sessionStorage.getItem("username");
    EventService.loadEventList(username, function (response) {
        $scope.eventList = response;
    });

    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    $scope.delete = function (eventId, index) {
        EventService.deleteEvent(eventId, function (response) {
            if (response.result == "SUCCESS") {
                $scope.eventList.events.splice(index, 1);
                toastr.success(response.message);
            }
            else {
                toastr.error(response.message);
            }
        });
    }
});

eventApp.controller('addController', function ($scope, $http, $httpParamSerializerJQLike, $location, toastr, EventService) {
    var baseUrl = $('#appBaseUrl').val();
    var username = sessionStorage.getItem("username");
    $scope.formData = {username: username};
    $scope.eventTypes = {};

    EventService.getEventTypeList(function (data) {
        $scope.eventTypes = data;
    });

    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    $scope.resetAddEventForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.submitAddEventForm = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restEvent/add",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                toastr.success(response.message);
                $location.path("/");
            } else {
                toastr.error(response.message);
                $location.path("/add");
            }
        });
    };

    $scope.formData.friends = [];

    $scope.addFriend = function () {
        if ($scope.modelObj != "" && $scope.formData.friends.indexOf($scope.modelObj) == -1) {
            $scope.formData.friends.push($scope.modelObj);
        }
        $scope.modelObj = "";
    };

    $scope.removeFriend = function (index) {
        $scope.formData.friends.splice(index, 1);
    };

    $scope.myOption = {
        options: {
            html: true,
            focusOpen: false,
            onlySelectValid: false,
            source: function (request, response) {
                var data = [];
                EventService.getUserList(request.term, null, username, function (result) {
                    data = result;
                    if (!data.length) {
                        data.push({
                            label: 'Seems not to have the user registered on Meedget. This user will be notified by email about this event.',
                            value: ''
                        });
                    }
                    response(data);
                });
            }
        },
        methods: {}
    };

});

eventApp.controller('editController', function ($scope, $http, $httpParamSerializerJQLike, $location, toastr, $routeParams, EventService) {
    var baseUrl = $('#appBaseUrl').val();
    var username = sessionStorage.getItem("username");
    $scope.formData = {};

    $scope.eventTypes = {};

    EventService.getEventTypeList(function (data) {
        $scope.eventTypes = data;
    });

    EventService.getEventDetails(username, $routeParams.eventId, function (response) {
        if (response.result == "SUCCESS") {
            $scope.formData = response.event;
        }
        else {
            toastr.error(response.message);
            $location.path("/");
        }
    });

    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    $scope.resetEditEventForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.submitEditEventForm = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restEvent/update",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                toastr.success(response.message);
                $location.path("/");
            } else {
                toastr.error(response.message);
                $location.path("/edit");
            }
        });
    };

    $scope.addFriend = function () {
        if ($scope.modelObj != "" && $scope.formData.friends.indexOf($scope.modelObj) == -1) {
            $scope.formData.friends.push($scope.modelObj);
        }
        $scope.modelObj = "";
    };

    $scope.removeFriend = function (index) {
        $scope.formData.friends.splice(index, 1);
    };

    $scope.myOption = {
        options: {
            html: true,
            focusOpen: false,
            onlySelectValid: false,
            source: function (request, response) {
                var data = [];
                EventService.getUserList(request.term, $scope.formData.eventId, username, function (result) {
                    data = result;
                    if (!data.length) {
                        data.push({
                            label: 'Seems not to have the user registered on Meedget. This user will be notified by email about this event.',
                            value: ''
                        });
                    }
                    response(data);
                });
            }
        },
        methods: {}
    };
});

eventApp.controller('viewController', function ($scope, $http, $httpParamSerializerJQLike, $location, toastr, $routeParams, EventService) {
    var baseUrl = $('#appBaseUrl').val();
    var username = sessionStorage.getItem("username");
    $scope.data = {};
    EventService.getfullEventDetails(username, $routeParams.eventId, function (response) {
        if (response.result == "SUCCESS") {
            $scope.data = response;
        }
        else {
            toastr.error(response.message);
            $location.path("/");
        }
    });

    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    $scope.delete = function (itemId, index) {
        EventService.deleteItem(itemId, function (response) {
            if (response.result == "SUCCESS") {
                $scope.data.event.items.splice(index, 1);
                //TODO:Must be done using some type of watch service
                EventService.getfullEventDetails(username, $routeParams.eventId, function (responseData) {
                    $scope.data = responseData;
                    toastr.success(response.message);
                });
            }
            else {
                toastr.error(response.message);
            }
        });
    };

    $scope.markEventCompleted = function (eventId) {
        EventService.markEventCompleted(eventId, function (response) {
            if (response.result == 'SUCCESS') {
                toastr.success(response.message);
                $location.path("/");
            } else {
                toastr.error(response.message);
            }
        });
    }
});