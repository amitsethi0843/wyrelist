//import {Component} from '@angular/core'
//import {Input} from "@angular/core";
//import {CommonService} from "../services/commonService";
//import {RestaurantService} from "../services/restaurantService";
//
//import {HTTP_PROVIDERS} from "@angular/http";
//import {RestaurantRoleType} from "./enums/enum";
//import {SelectDirective} from "./directives/select"
//
//@Component({
//    templateUrl: '/app/templates/restaurant/register.html',
//    directives: [SelectDirective],
//    providers: [CommonService, HTTP_PROVIDERS]
//})
//export class RegisterComponent {
//    restaurantName:string;
//    firstName:string;
//    lastName:string;
//    contact:number;
//    username:string;
//    password:string;
//    response:string;
//    retypePassword:string;
//    role:string = "";
//
//    constructor(private commonService:CommonService, public restaurantService:RestaurantService) {
//    }
//
//    registerUser() {
//        this.commonService.setData(
//            'restaurantName='+ this.restaurantName+
//            '&first_name='+ this.firstName+
//            '&last_name='+ this.lastName+
//            '&username='+ this.username+
//            '&email='+ this.username+
//            '&contact='+ this.contact+
//            '&password='+ this.password+
//            '&retypePassword='+ this.retypePassword+
//            '&role='+ this.role
//        );
//        this.commonService.setUrl('restaurant/register/');
//        this.commonService.postData().subscribe(
//            data=>this.response = alert(JSON.stringify(data)),
//            error=>console.log(JSON.stringify(error)),
//            ()=>console.log("fininshed")
//        )
//    }
//}
