import {Component} from "@angular/core"
import {CustomEventsService} from "../services/customEvents"
import {CommonService} from "../services/commonService"
import {OnInit} from "@angular/core"
import {AppConstants} from "../config/constants"
import {HTTP_PROVIDERS,Http} from "@angular/http";

@Component({
  templateUrl: '/app/templates/home.html',
  providers:[CommonService,HTTP_PROVIDERS]
})
export class HomeComponent implements OnInit {

  createS3Url:any;
  homePageData:any;

  constructor(private customEventsService:CustomEventsService, private commonService:CommonService) {
    this.createS3Url=AppConstants._fetch().createS3Url;
    this.customEventsService.changeSidePanelVisibility(false)
  }

  ngOnInit() {
    this.commonService.setUrl("public/home/");
    this.commonService.getData().subscribe(
      data=> {
        this.homePageData=data;
      },
      error=>console.log("error"),
      ()=>console.log("finished")
    );
  }
}
