var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var commonService_1 = require("../services/commonService");
var http_1 = require("angular2/http");
var select_1 = require("./directives/select");
var RegisterComponent = (function () {
    function RegisterComponent(commonService, restaurantService) {
        this.commonService = commonService;
        this.restaurantService = restaurantService;
        this.role = "";
    }
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.commonService.setData('restaurantName=' + this.restaurantName +
            '&first_name=' + this.firstName +
            '&last_name=' + this.lastName +
            '&username=' + this.username +
            '&email=' + this.username +
            '&contact=' + this.contact +
            '&password=' + this.password +
            '&retypePassword=' + this.retypePassword +
            '&role=' + this.role);
        this.commonService.setUrl('restaurant/register/');
        this.commonService.postData().subscribe(function (data) { return _this.response = alert(JSON.stringify(data)); }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("fininshed"); });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/restaurant/register.html',
            directives: [select_1.SelectDirective],
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS]
        })
    ], RegisterComponent);
    return RegisterComponent;
})();
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.js.map