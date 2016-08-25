var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var constants_1 = require("../../../config/constants");
var Timepicker = (function () {
    function Timepicker() {
        this.twentyFourHours = false;
        this.time = constants_1.AppConstants._fetch().time;
        //time:any = "0:00 AM";
        this.timeChanged = new core_2.EventEmitter();
        this.outputTime = {
            hours: 1, minutes: 0, ampm: "AM"
        };
    }
    //ngOnInit() {
    //var element = jQuery("#timepicker1");
    //element.timepicker()
    //}
    Timepicker.prototype.emitTimeChangeEvent = function () {
        this.timeChanged.emit(this.outputTime);
    };
    __decorate([
        core_2.Input()
    ], Timepicker.prototype, "twentyFourHours");
    __decorate([
        core_2.Input()
    ], Timepicker.prototype, "componentId");
    __decorate([
        core_2.Input()
    ], Timepicker.prototype, "componentClass");
    __decorate([
        core_2.Output()
    ], Timepicker.prototype, "timeChanged");
    Timepicker = __decorate([
        core_1.Component({
            selector: "timepicker",
            templateUrl: "/app/components/directives/templates/timepicker.html"
        })
    ], Timepicker);
    return Timepicker;
})();
exports.Timepicker = Timepicker;
//# sourceMappingURL=timepicker.js.map