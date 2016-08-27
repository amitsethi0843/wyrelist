var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var commonService_1 = require("../../services/commonService");
var http_1 = require("@angular/http");
var LoginComponent = (function () {
    function LoginComponent(auth, _fb, commonService, customEventsService) {
        this.auth = auth;
        this._fb = _fb;
        this.commonService = commonService;
        this.customEventsService = customEventsService;
        this.customEventsService.changeSidePanelVisibility(true);
        this.loginForm = this._fb.group({
            username: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]]
        });
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.valid && this.loginForm.value.username && this.loginForm.value.password) {
            this.showError = false;
            this.commonService.setData(this.loginForm.value);
            this.commonService.setUrl("user/login/");
            //
            this.commonService.postData().subscribe(function (data) {
                if (data.token && data.username) {
                    _this.auth.setUserData(data.token, data.username);
                }
            }, function (error) { return console.log("error"); }, function () { return console.log("finished"); });
        }
        else {
            this.showError = true;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/public/login.html',
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        })
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map