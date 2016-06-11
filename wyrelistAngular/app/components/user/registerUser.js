"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const commonService_1 = require("../../services/commonService");
const auth_1 = require("../../services/auth");
const http_1 = require("@angular/http");
let UserRegistrationComponent = class UserRegistrationComponent {
    constructor(commonService, auth) {
        this.commonService = commonService;
        this.auth = auth;
        this.registerRequest = {
            username: null,
            password: null,
            retypePassword: null
        };
    }
    registerUser() {
        this.commonService.setData(this.registerRequest);
        this.commonService.setUrl('user/register/');
        this.commonService.postData().subscribe(data => {
            console.log("--------------" + JSON.stringify(data));
            if (data.token && data.username) {
                this.token = data.token;
                this.returnedUsername = data.username;
                this.auth.setUserData(this.token, this.returnedUsername);
            }
        }, error => console.log(JSON.stringify(error)));
    }
};
UserRegistrationComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/templates/public/registerUser.html',
        providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS]
    }), 
    __metadata('design:paramtypes', [commonService_1.CommonService, auth_1.Auth])
], UserRegistrationComponent);
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=registerUser.js.map