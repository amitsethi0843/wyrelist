import {Component} from 'angular2/core'
import {Input} from "angular2/core";
import {CommonService} from "../services/commonService";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    templateUrl: '/app/templates/public/login.html',
    inputs: ['email', 'password'],
    providers: [CommonService, HTTP_PROVIDERS]
})
export class LoginComponent {
    email:string;
    password:string;
    getData:string;

    constructor(private commonService:CommonService) {

    }

    userLogin() {
        if (this.email && this.password) {
            const data = "username=" + this.email + "&password=" + this.password;
            this.commonService.setData(data);
            this.commonService.setUrl("/signUp/login");

            this.commonService.postData().subscribe(
                data=>this.getData = JSON.stringify(data),
                error=>alert(JSON.stringify(error)),
                ()=>console.log("fininshed")
            )
            alert(JSON.stringify(this.getData))
        }
    }
}