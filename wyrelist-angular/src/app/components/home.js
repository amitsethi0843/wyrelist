var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var commonService_1 = require("../services/commonService");
var constants_1 = require("../config/constants");
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
var HomeComponent = (function () {
    function HomeComponent(customEventsService, commonService) {
        this.customEventsService = customEventsService;
        this.commonService = commonService;
        this.createS3Url = constants_1.AppConstants._fetch().createS3Url;
        this.customEventsService.changeSidePanelVisibility(false);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.setUrl("public/home/");
        this.commonService.getData().subscribe(function (data) {
            _this.homePageData = data;
        }, function (error) { return console.log("error"); }, function () { return console.log("finished"); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/home.html',
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        })
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map