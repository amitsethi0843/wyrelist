var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var commonService_1 = require("../../services/commonService");
var http_1 = require("angular2/http");
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(commonService, router, config) {
        this.commonService = commonService;
        this.router = router;
        this.config = config;
    }
    UserRegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this.commonService.setData('&username=' + this.username +
            '&email=' + this.username +
            '&password=' + this.password +
            '&retypePassword=' + this.retypePassword);
        this.commonService.setUrl('user/register/');
        this.commonService.postData().subscribe(function (data) {
            if (data.token && data.username) {
                _this.token = data.token;
                _this.returnedUsername = data.username;
                _this.config.setUserName(_this.returnedUsername);
                _this.config.setUserToken(_this.token);
                location.reload();
            }
        }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("fininshed"); });
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/user/registerUser.html',
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS, commonService_1.Config]
        })
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
})();
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=registerUser.js.map