import {Input,Output,Component,EventEmitter} from "@angular/core";
/// <reference path="../../../../../typings/globals/google.maps/index.d.ts" />


@Component({
  selector: "google-autoComplete",
  templateUrl: "/app/components/directives/templates/google-locationAutoComplete.html",
})

export class GoogleAutoCompleteDirective {
  query:string;
  @Input()classes:string;
  @Input()name:string;
  @Output() setValues:EventEmitter<any> = new EventEmitter();

  constructor() {
    var input = <HTMLInputElement>document.getElementById("googleAutoComplete");
    var options = {componentRestrictions: {country: 'in'}};
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var place = autocomplete.getPlace();
      this.setValues.emit(place);
    })

  }


}
