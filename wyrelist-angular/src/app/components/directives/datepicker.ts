import {Component} from "@angular/core"
import {EventEmitter,ElementRef,Output,Input} from "@angular/core"
import {AppConstants} from "../../config/constants"

@Component({
  selector: "datepicker_self",
  templateUrl: "/app/components/directives/templates/datepicker.html",
//host: {
//    "[value]":"modal"
//}
})

export class DatePicker_Self {

  @Input()abbreviatedMonths:boolean=false;
  dateInput:any=AppConstants._fetch().date;
  @Input()componentId:string;
  @Input()componentClass:string;
  //time:any = "0:00 AM";
  @Output()dateChanged:EventEmitter<any> = new EventEmitter();
  outputDate:any={
    date:1,month:"Jan",year:"2017"
  };


  constructor(){
  }
  //ngOnInit() {
  //var element = jQuery("#timepicker1");
  //element.timepicker()
  //}

  emitDateChangeEvent() {
    this.dateChanged.emit(this.outputDate)
  }

}
