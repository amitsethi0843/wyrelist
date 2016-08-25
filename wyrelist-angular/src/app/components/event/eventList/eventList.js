var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var customDate_1 = require("../../../pipes/customDate");
var commonService_1 = require("../../../services/commonService");
var router_deprecated_1 = require("@angular/router-deprecated");
var datepicker_1 = require("../../directives/datepicker");
var EventListComponent = (function () {
    function EventListComponent(commonService) {
        this.commonService = commonService;
        this.eventTypes = {
            values: [
                { key: "SINGLE", value: "Single" },
                { key: "COUPLE", value: "Couple" },
                { key: "FAMILY", value: "Family" }
            ]
        };
        this.eventFilter = {
            fromDate: null,
            toDate: null
        };
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.fetchEventList();
    };
    EventListComponent.prototype.fetchEventList = function () {
        var _this = this;
        this.commonService.setUrl("event/");
        this.commonService.getData().subscribe(function (data) {
            _this.events = data.results;
        }, function (error) { return console.log(JSON.stringify(error)); });
    };
    EventListComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/event/eventList/eventList.html',
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, datepicker_1.DatePicker_Self],
            pipes: [customDate_1.ParseDate]
        })
    ], EventListComponent);
    return EventListComponent;
})();
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=eventList.js.map