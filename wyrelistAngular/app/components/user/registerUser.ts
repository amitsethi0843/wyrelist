import {Component} from "@angular/core"
import {CommonService} from "../../services/commonService"
import {Auth} from "../../services/auth"
import {HTTP_PROVIDERS} from "@angular/http";


@Component({
    templateUrl: '/app/templates/public/registerUser.html',
    providers: [CommonService, HTTP_PROVIDERS]
})
export class UserRegistrationComponent {
    registerRequest:any = {
        username: null,
        password: null,
        retypePassword: null
    }

    token:any;
    returnedUsername:any;

    constructor(private commonService:CommonService, private auth:Auth) {
    }

    registerUser() {
        this.commonService.setData(
            this.registerRequest
        );
        this.commonService.setUrl('user/register/');
        this.commonService.postData().subscribe(
            data=> {
                console.log("--------------" + JSON.stringify(data));
                if (data.token && data.username) {
                    this.token = data.token;
                    this.returnedUsername = data.username;
                    this.auth.setUserData(this.token, this.returnedUsername);
                    //this.auth.setUserToken();
                    //location.reload()
                }
            },
            error=>console.log(JSON.stringify(error))
        )
    }

}