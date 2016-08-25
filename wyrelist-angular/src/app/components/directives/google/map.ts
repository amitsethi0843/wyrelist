import {Component} from "@angular/core"
import {OnInit} from "@angular/core";
import {Input} from "@angular/core";
/// <reference path="../../../../../typings/globals/google.maps/index.d.ts" />


@Component({
    selector: "google-map",
    templateUrl: "/app/components/directives/templates/google-map.html",
    //host: {
    //    "[value]":"modal"
    //}
    inputs: ['latitude', 'longitude', 'zoom']
})

export class GoogleMapDirective implements OnInit {
    @Input()latitude:any;
    @Input()longitude:any;
    @Input()zoom:number;
    google:any;

    constructor(){
    }

    ngOnInit() {
        this.loadMap()
    }

    loadMap() {
        var options = {
            center: {lat: this.latitude, lng: this.longitude},
            zoom: this.zoom ? this.zoom : 8,
            scrollwheel:  false
        };
        var googleMap = new google.maps.Map(document.getElementById('map'), options);

        //var marker = new google.maps.Marker({
        //    position: {lat: this.latitude, lng: this.longitude},
        //    map: googleMap,
        //    title: 'Event Location!'
        //});


    }
}
