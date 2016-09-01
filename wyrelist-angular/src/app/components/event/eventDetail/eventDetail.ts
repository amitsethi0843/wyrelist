import {Component} from "@angular/core"
import {CommonService} from "../../../services/commonService"
import {HTTP_PROVIDERS} from "@angular/http";
import {RouteParams} from "@angular/router-deprecated"
import {GoogleMapDirective} from "../../directives/google/map";
import {Capitalize} from "../../../pipes/capitalize"
import {ParseDate} from "../../../pipes/customDate"
import {AppConstants} from "../../../config/constants"
import {CustomEventsService} from "../../../services/customEvents";

@Component({
  templateUrl: '/app/templates/event/eventDetail/eventDetail.html',
  directives: [GoogleMapDirective],
  pipes: [Capitalize, ParseDate],
  providers: [CommonService, HTTP_PROVIDERS]
})
export class EventDetailComponent {
  eventId:string;
  eventDetails:any;
  stringifiedData:any;
  nearByRailywayStations:Array<any> = [];
  nearByMetroStations:Array<any> = [];
  nearByHotels:Array<any> = [];
  latitude:string;
  longitude:string;
  error:any;

  constructor(params:RouteParams, private commonService:CommonService, private customEventsService:CustomEventsService) {
    this.customEventsService.changeSidePanelVisibility(true);
    this.eventId = params.get("id");
    this.fetchEventById()
  }

  fetchEventById() {
    if (this.eventId) {
      this.commonService.setUrl("event/" + this.eventId + "/");
      this.commonService.getData().subscribe(
        data=> {
          var nearByLocations = data.nearby_locations;
          if (nearByLocations) {
            for (var i in nearByLocations) {
              if (nearByLocations[i].location.type === AppConstants._fetch().locationType.METROSTATION[0]) {
                this.nearByMetroStations.push(nearByLocations[i])
              }
              else if (nearByLocations[i].location.type === AppConstants._fetch().locationType.RAILWAYSTATION[0]) {
                this.nearByRailywayStations.push(nearByLocations[i])
              }
              else if (nearByLocations[i].location.type === AppConstants._fetch().locationType.HOTEL[0]) {
                this.nearByHotels.push(nearByLocations[i])
              }
            }
          }
          this.eventDetails = data;
          this.latitude = data.location.latitude;
          this.longitude = data.location.longitude;
        },
        error=> {
          this.error = error
        }
      )
    }
  }
}
