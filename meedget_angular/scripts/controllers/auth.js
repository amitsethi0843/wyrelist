/**
 * Created by hitenpratap on 29/12/15.
 */
var authApp = angular.module('authApp', []);

authApp.value('USER_AUTH', {
    EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
    GUEST_USER_ADD: "GUEST_USER_ADD",
    RESET_PASSWORD: "RESET_PASSWORD"
});

authApp.controller('loginController', function ($scope, $location, $http, $httpParamSerializerJQLike, toastr) {
    var baseUrl = $('#appBaseUrl').val();
    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );

    $scope.formData = {};

    $scope.resetLoginForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.loginUser = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restAuth/loginUser",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
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
    };
});

authApp.controller('logoutController', function ($scope, $location, $http, $httpParamSerializerJQLike, toastr, EventService) {
    var baseUrl = $('#appBaseUrl').val();
    var authToken = sessionStorage.getItem("authToken");

    $scope.logout = function () {
        $http.get(baseUrl + "/restAuth/logoutUser", {
            params: {
                token: authToken
            }
        }).success(function (data) {
            if (data.result == 'SUCCESS') {
                toastr.success(data.message);
                EventService.handleWrongAuthEvent();
            }
            else {
                $location.path("/");
                toastr.error(data.message);
            }
        });
    };

    $scope.logout();
});

authApp.controller('registerController', function ($scope, $location, $http, $httpParamSerializerJQLike, toastr, $routeParams) {
    var baseUrl = $('#appBaseUrl').val();
    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );
    $scope.formData = {guestUserId: $routeParams.guestUserId, emailAddress: $routeParams.emailAddress};

    $scope.resetRegisterForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.registerUser = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restAuth/registerUser",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                sessionStorage.setItem("userAuthMsg", response.message);
                $location.path("/customMessage");
            } else {
                toastr.error(response.message);
            }
        });
    };
});

authApp.controller('forgotPasswordController', function ($scope, $location, $http, $httpParamSerializerJQLike, toastr) {
    var baseUrl = $('#appBaseUrl').val();
    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );
    $scope.formData = {};

    $scope.resetForgotPasswordForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.forgotPassword = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        $http({
            url: baseUrl + "/restAuth/forgotPassword",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                sessionStorage.setItem("userAuthMsg", response.message);
                $location.path("/customMessage");
            } else {
                toastr.error(response.message);
            }
        });
    }

});

authApp.controller('resetPasswordController', function ($scope, $location, $http, $httpParamSerializerJQLike, $routeParams, toastr) {
    var baseUrl = $('#appBaseUrl').val();
    $scope.$on(
        "$routeChangeSuccess",
        function handleRouteChangeEvent(event) {
            $.material.init();
        }
    );
    $scope.formData = {userId: $routeParams.userId};

    $scope.resetResetPasswordForm = function () {
        $scope.$broadcast('show-errors-reset');
    };

    $scope.resetPassword = function (form) {
        $scope.$broadcast('show-errors-check-validity');
        if (form.$invalid) {
            return;
        }
        if (this.formData.password != this.formData.confPassword) {
            toastr.error("Both password must be same. Please try again");
            return;
        }
        $http({
            url: baseUrl + "/restAuth/resetPassword",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(this.formData)
        }).success(function (response) {
            if (response.result == 'SUCCESS') {
                sessionStorage.setItem("userAuthMsg", response.message);
                $location.path("/customMessage");
            } else {
                toastr.error(response.message);
            }
        });
    }

});

authApp.controller('userAuthController', function ($scope, $location, $http, toastr, $routeParams, USER_AUTH, EventService) {
    sessionStorage.removeItem("userAuthMsg");
    if ($routeParams.type == USER_AUTH.EMAIL_VERIFICATION) {
        EventService.verifyUserEmailAddress($routeParams.id, function (response) {
            sessionStorage.setItem("userAuthMsg", response.message);
            $location.path("/customMessage");
        });
    } else if ($routeParams.type == USER_AUTH.GUEST_USER_ADD) {
        $location.path("/register/" + $routeParams.id + "/" + $routeParams.params1);
    } else if ($routeParams.type == USER_AUTH.RESET_PASSWORD) {
        $location.path("/resetPassword/" + $routeParams.id);

    }
});