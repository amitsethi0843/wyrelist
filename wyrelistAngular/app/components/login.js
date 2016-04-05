var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var commonService_1 = require("../services/commonService");
var http_1 = require("angular2/http");
var LoginComponent = (function () {
    function LoginComponent(commonService) {
        this.commonService = commonService;
    }
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        if (this.email && this.password) {
            var data = "username=" + this.email + "&password=" + this.password;
            this.commonService.setData(data);
            this.commonService.setUrl("/signUp/login");
            this.commonService.postData().subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(JSON.stringify(error)); }, function () { return console.log("fininshed"); });
            alert(JSON.stringify(this.getData));
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/public/login.html',
            inputs: ['email', 'password'],
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS]
        })
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map