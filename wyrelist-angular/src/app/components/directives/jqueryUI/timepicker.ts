import {Component} from "@angular/core"
import {EventEmitter,ElementRef,Output,Input} from "@angular/core"
import {AppConstants} from "../../../config/constants"

@Component({
  selector: "timepicker",
  templateUrl: "/app/components/directives/templates/timepicker.html",
//host: {
//    "[value]":"modal"
//}
})

export class Timepicker {

  @Input()twentyFourHours:boolean=false;
  time:any=AppConstants._fetch().time;
  @Input()componentId:string;
  @Input()componentClass:string;
  //time:any = "0:00 AM";
  @Output()timeChanged:EventEmitter<any> = new EventEmitter();
  outputTime:any={
    hours:1,minutes:0,ampm:"AM"
  };


  constructor(){
  }
  //ngOnInit() {
    //var element = jQuery("#timepicker1");
    //element.timepicker()
  //}

  emitTimeChangeEvent() {
    this.timeChanged.emit(this.outputTime)
  }

}
