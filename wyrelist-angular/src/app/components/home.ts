import {Component} from "@angular/core"
import {CustomEventsService} from "../services/customEvents"

@Component({
  templateUrl:'/app/templates/home.html'
})
export class HomeComponent{

  constructor(private customEventsService:CustomEventsService){
    this.customEventsService.changeSidePanelVisibility(false)
  }
}
