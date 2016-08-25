import {Component} from '@angular/core'
import {Input} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";

import {ParseDate} from "../../../pipes/customDate"

import {CommonService} from "../../../services/commonService";
//import {OnInit} from "angular2/core";
import {OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {DatePicker_Self} from "../../directives/datepicker"

@Component({
  templateUrl: '/app/templates/event/eventList/eventList.html',
  providers: [CommonService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, DatePicker_Self],
  pipes: [ParseDate]
})
export class EventListComponent implements OnInit {

  events:any;

  eventTypes:any = {
    values: [
      {key: "SINGLE", value: "Single"},
      {key: "COUPLE", value: "Couple"},
      {key: "FAMILY", value: "Family"}
    ]
  };

  eventFilter:any = {
    fromDate: null,
    toDate: null
  };

  constructor(private commonService:CommonService) {
  }

  ngOnInit() {
    this.fetchEventList();
  }

  fetchEventList() {
    this.commonService.setUrl("event/");
    this.commonService.getData().subscribe(
      data=> {
        this.events = data.results;
      },
      error=>console.log(JSON.stringify(error))
    );

  }
}
