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
const core_1 = require('@angular/core');
const commonService_1 = require("../services/commonService");
const auth_1 = require("../services/auth");
const http_1 = require("@angular/http");
let LoginComponent = class LoginComponent {
    constructor(commonService, auth) {
        this.commonService = commonService;
        this.auth = auth;
        this.loginRequest = {
            email: null,
            password: null,
            username: null
        };
    }
    loginUser() {
        if (this.loginRequest.email && this.loginRequest.password) {
            //const data = "username=" + this.email + "&password=" + this.password;
            this.loginRequest.username = this.loginRequest.email;
            this.commonService.setData(this.loginRequest);
            this.commonService.setUrl("user/login/");
            this.commonService.postData().subscribe(data => {
                if (data.token && data.username) {
                    this.auth.setUserData(data.token, data.username);
                }
            }, error => console.log("error"), () => console.log("fininshed"));
        }
    }
};
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/templates/public/login.html',
        providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS]
    }), 
    __metadata('design:paramtypes', [commonService_1.CommonService, auth_1.Auth])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map