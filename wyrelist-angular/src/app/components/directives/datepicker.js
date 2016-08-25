var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var constants_1 = require("../../config/constants");
var DatePicker_Self = (function () {
    function DatePicker_Self() {
        this.abbreviatedMonths = false;
        this.dateInput = constants_1.AppConstants._fetch().date;
        //time:any = "0:00 AM";
        this.dateChanged = new core_2.EventEmitter();
        this.outputDate = {
            date: 1, month: "Jan", year: "2017"
        };
    }
    //ngOnInit() {
    //var element = jQuery("#timepicker1");
    //element.timepicker()
    //}
    DatePicker_Self.prototype.emitDateChangeEvent = function () {
        this.dateChanged.emit(this.outputDate);
    };
    __decorate([
        core_2.Input()
    ], DatePicker_Self.prototype, "abbreviatedMonths");
    __decorate([
        core_2.Input()
    ], DatePicker_Self.prototype, "componentId");
    __decorate([
        core_2.Input()
    ], DatePicker_Self.prototype, "componentClass");
    __decorate([
        core_2.Output()
    ], DatePicker_Self.prototype, "dateChanged");
    DatePicker_Self = __decorate([
        core_1.Component({
            selector: "datepicker_self",
            templateUrl: "/app/components/directives/templates/datepicker.html"
        })
    ], DatePicker_Self);
    return DatePicker_Self;
})();
exports.DatePicker_Self = DatePicker_Self;
//# sourceMappingURL=datepicker.js.map