var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
/// <reference path="../../../../../typings/globals/google.maps/index.d.ts" />
var GoogleMapDirective = (function () {
    function GoogleMapDirective() {
    }
    GoogleMapDirective.prototype.ngOnInit = function () {
        this.loadMap();
    };
    GoogleMapDirective.prototype.loadMap = function () {
        var options = {
            center: { lat: this.latitude, lng: this.longitude },
            zoom: this.zoom ? this.zoom : 8,
            scrollwheel: false
        };
        var googleMap = new google.maps.Map(document.getElementById('map'), options);
        //var marker = new google.maps.Marker({
        //    position: {lat: this.latitude, lng: this.longitude},
        //    map: googleMap,
        //    title: 'Event Location!'
        //});
    };
    __decorate([
        core_2.Input()
    ], GoogleMapDirective.prototype, "latitude");
    __decorate([
        core_2.Input()
    ], GoogleMapDirective.prototype, "longitude");
    __decorate([
        core_2.Input()
    ], GoogleMapDirective.prototype, "zoom");
    GoogleMapDirective = __decorate([
        core_1.Component({
            selector: "google-map",
            templateUrl: "/app/components/directives/templates/google-map.html",
            //host: {
            //    "[value]":"modal"
            //}
            inputs: ['latitude', 'longitude', 'zoom']
        })
    ], GoogleMapDirective);
    return GoogleMapDirective;
})();
exports.GoogleMapDirective = GoogleMapDirective;
//# sourceMappingURL=map.js.map