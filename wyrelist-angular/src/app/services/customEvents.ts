import {Injectable,EventEmitter} from "@angular/core";

@Injectable()
export class CustomEventsService {

  sidePanelVisible:boolean = true;
  sidePanelVisibilityChange:EventEmitter<any> = new EventEmitter();

  changeSidePanelVisibility(visible:boolean){
    this.sidePanelVisible=visible;
    this.sidePanelVisibilityChange.emit(this.sidePanelVisible)
  }
}
