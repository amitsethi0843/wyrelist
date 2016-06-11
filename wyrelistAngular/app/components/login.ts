import {Component} from '@angular/core'
import {Input} from "@angular/core";
import {CommonService} from "../services/commonService";
import {Auth} from "../services/auth";

import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    templateUrl: '/app/templates/public/login.html',
    providers: [CommonService, HTTP_PROVIDERS]
})
export class LoginComponent {
    loginRequest:any = {
        email: null,
        password: null,
        username: null
    }
    getData:string;

    constructor(private commonService:CommonService, private auth:Auth) {

    }

    loginUser() {
        if (this.loginRequest.email && this.loginRequest.password) {
            //const data = "username=" + this.email + "&password=" + this.password;
            this.loginRequest.username = this.loginRequest.email;
            this.commonService.setData(this.loginRequest);
            this.commonService.setUrl("user/login/");

            this.commonService.postData().subscribe(
                data=> {
                    if (data.token && data.username) {
                        this.auth.setUserData(data.token, data.username);
                        //this.auth.setUserToken();
                        //location.reload()
                    }
                },
                error=>console.log("error"),
                ()=>console.log("fininshed")
            )
        }
    }
}