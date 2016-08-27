var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var commonService_1 = require("../../../services/commonService");
var http_1 = require("@angular/http");
var map_1 = require("../../directives/google/map");
var capitalize_1 = require("../../../pipes/capitalize");
var customDate_1 = require("../../../pipes/customDate");
var constants_1 = require("../../../config/constants");
var EventDetailComponent = (function () {
    function EventDetailComponent(params, commonService, customEventsService) {
        this.commonService = commonService;
        this.customEventsService = customEventsService;
        this.nearByRailywayStations = [];
        this.nearByMetroStations = [];
        this.nearByHotels = [];
        this.customEventsService.changeSidePanelVisibility(true);
        this.eventId = params.get("id");
        this.fetchEventById();
    }
    EventDetailComponent.prototype.fetchEventById = function () {
        var _this = this;
        if (this.eventId) {
            this.commonService.setUrl("event/" + this.eventId + "/");
            this.commonService.getData().subscribe(function (data) {
                var nearByLocations = data.nearby_locations;
                if (nearByLocations) {
                    console.log(JSON.stringify(nearByLocations));
                    for (var i in nearByLocations) {
                        if (nearByLocations[i].location.type === constants_1.AppConstants._fetch().locationType.METROSTATION[0]) {
                            _this.nearByMetroStations.push(nearByLocations[i]);
                        }
                        else if (nearByLocations[i].location.type === constants_1.AppConstants._fetch().locationType.RAILWAYSTATION[0]) {
                            _this.nearByRailywayStations.push(nearByLocations[i]);
                        }
                        else if (nearByLocations[i].location.type === constants_1.AppConstants._fetch().locationType.HOTEL[0]) {
                            _this.nearByHotels.push(nearByLocations[i]);
                        }
                    }
                }
                _this.eventDetails = data;
                _this.latitude = data.location.latitude;
                _this.longitude = data.location.longitude;
            }, function (error) {
                _this.error = error;
            });
        }
    };
    EventDetailComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/event/eventDetail/eventDetail.html',
            directives: [map_1.GoogleMapDirective],
            pipes: [capitalize_1.Capitalize, customDate_1.ParseDate],
            providers: [commonService_1.CommonService, http_1.HTTP_PROVIDERS]
        })
    ], EventDetailComponent);
    return EventDetailComponent;
})();
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=eventDetail.js.map