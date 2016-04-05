import {Component} from "angular2/core"
import {CommonService,Config} from "../../services/commonService"
import {HTTP_PROVIDERS} from "angular2/http";
import {Router} from "angular2/router"


@Component({
    templateUrl: '/app/templates/user/registerUser.html',
    providers: [CommonService, HTTP_PROVIDERS,Config]
})
export class UserRegistrationComponent {
    username:string;
    password:string;
    retypePassword:string;
    token:any;
    returnedUsername:any;

    constructor(private commonService:CommonService, private router:Router,private config:Config) {
    }

    registerUser() {
        this.commonService.setData(
            '&username=' + this.username +
            '&email=' + this.username +
            '&password=' + this.password +
            '&retypePassword=' + this.retypePassword
        );
        this.commonService.setUrl('user/register/');
        this.commonService.postData().subscribe(
            data=> {
                if (data.token && data.username) {
                    this.token = data.token;
                    this.returnedUsername = data.username;
                    this.config.setUserName(this.returnedUsername);
                    this.config.setUserToken(this.token);
                    location.reload()
                }
            },
            error=>console.log(JSON.stringify(error)),
            ()=>console.log("fininshed")
        )
    }

}