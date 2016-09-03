var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var commonService_1 = require("../../services/commonService");
var appSettings_1 = require("../../config/appSettings");
var http_1 = require("@angular/http");
var forms_1 = require('@angular/forms');
var validators_1 = require('../../services/validators');
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(commonService, auth, _fb, customEventsService) {
        this.commonService = commonService;
        this.auth = auth;
        this._fb = _fb;
        this.customEventsService = customEventsService;
        this.registerRequest = {
            username: null,
            password: null,
            retypePassword: null
        };
        this.customEventsService.changeSidePanelVisibility(true);
        this.registrationForm = this._fb.group({
            username: ['', [forms_1.Validators.required, validators_1.CustomValidators.validateEmail]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(appSettings_1.AppSettings.fetch().appServer.passwordLength)]],
            retypePassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(appSettings_1.AppSettings.fetch().appServer.passwordLength)]]
        });
    }
    UserRegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.registrationForm.valid) {
            this.commonService.setData(this.registrationForm.value);
            this.commonService.setUrl('user/register/');
            this.commonService.postData().subscribe(function (data) {
                if (data.token && data.username) {
                    _this.token = data.token;
                    _this.returnedUsername = data.username;
                    _this.auth.setUserData(_this.token, _this.returnedUsername);
                }
            }, function (error) { return console.log(JSON.stringify(error)); });
        }
        else {
            this.showError = true;
        }
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/public/registerUser.html',
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        })
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
})();
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=registerUser.js.map