var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var commonService_1 = require("../../../services/commonService");
var timepicker_1 = require("../../directives/jqueryUI/timepicker");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var forms_1 = require("@angular/forms");
var AddEventComponent = (function () {
    function AddEventComponent(commonService) {
        this.commonService = commonService;
        this.formElementsValues = {
            eventType: [
                { key: "SINGLE", value: "Single" },
                { key: "COUPLE", value: "Couple" },
                { key: "FAMILY", value: "Family" }
            ]
        };
        this.input = {
            contact: {
                contactNumber: null,
                contactType: null
            },
            address: {
                line1: null,
                line2: null,
                area: null,
                city: null,
                state: null,
                pincode: null,
                latitude: null,
                longitude: null
            },
            entry: {
                type: null,
                entryChargable: false,
                fees: 0
            },
            event: {
                date: null,
                duration: 1,
                eventStartTime: null,
                eventEndTime: null,
                description: null,
                totalTickets: null
            },
            createdBy: null
        };
    }
    AddEventComponent.prototype.addEvent = function () {
        console.log(JSON.stringify(this.input.event));
    };
    AddEventComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/event/addEvent.html',
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS, forms_1.NgModel],
            directives: [timepicker_1.Timepicker, ng2_bootstrap_1.DATEPICKER_DIRECTIVES]
        })
    ], AddEventComponent);
    return AddEventComponent;
})();
exports.AddEventComponent = AddEventComponent;
//# sourceMappingURL=addEvent.js.map