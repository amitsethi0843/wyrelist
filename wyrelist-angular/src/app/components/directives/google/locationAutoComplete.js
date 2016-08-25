var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/// <reference path="../../../../../typings/globals/google.maps/index.d.ts" />
var GoogleAutoCompleteDirective = (function () {
    function GoogleAutoCompleteDirective() {
        this.setValues = new core_1.EventEmitter();
        var input = document.getElementById("googleAutoComplete");
        var options = { componentRestrictions: { country: 'in' } };
        var autocomplete = new google.maps.places.Autocomplete(input, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            this.setValues.emit(place);
        });
    }
    __decorate([
        core_1.Input()
    ], GoogleAutoCompleteDirective.prototype, "classes");
    __decorate([
        core_1.Input()
    ], GoogleAutoCompleteDirective.prototype, "name");
    __decorate([
        core_1.Output()
    ], GoogleAutoCompleteDirective.prototype, "setValues");
    GoogleAutoCompleteDirective = __decorate([
        core_1.Component({
            selector: "google-autoComplete",
            templateUrl: "/app/components/directives/templates/google-locationAutoComplete.html"
        })
    ], GoogleAutoCompleteDirective);
    return GoogleAutoCompleteDirective;
})();
exports.GoogleAutoCompleteDirective = GoogleAutoCompleteDirective;
//# sourceMappingURL=locationAutoComplete.js.map