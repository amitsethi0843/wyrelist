import {Component} from "@angular/core"
import {HTTP_PROVIDERS} from "@angular/http"
import {CommonService} from "../../../services/commonService"
import {Timepicker} from "../../directives/jqueryUI/timepicker"
import {DATEPICKER_DIRECTIVES} from "ng2-bootstrap";
import {NgModel} from "@angular/forms"
@Component({
  templateUrl: '/app/templates/event/addEvent.html',
  providers: [CommonService, HTTP_PROVIDERS,NgModel],
  directives: [Timepicker,DATEPICKER_DIRECTIVES]
})

export class AddEventComponent {
  formElementsValues:any = {
    eventType: [
      {key: "SINGLE", value: "Single"},
      {key: "COUPLE", value: "Couple"},
      {key: "FAMILY", value: "Family"}
    ]
  }
  input:any = {
    contact: {
      contactNumber: null,
      contactType: null,
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
      fees: 0,
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

  constructor(private commonService:CommonService) {

  }

  addEvent() {
    console.log(JSON.stringify(this.input.event))
  }

}
