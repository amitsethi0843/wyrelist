import {Component} from "@angular/core"
import {CommonService} from "../../services/commonService"
import {Auth} from "../../services/auth"
import {AppSettings} from "../../config/appSettings"
import {HTTP_PROVIDERS} from "@angular/http";
import { REACTIVE_FORM_DIRECTIVES,FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {CustomValidators} from '../../services/validators'

@Component({
  templateUrl: '/app/templates/public/registerUser.html',
  providers: [CommonService, HTTP_PROVIDERS],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class UserRegistrationComponent {
  registerRequest:any = {
    username: null,
    password: null,
    retypePassword: null
  }
  registrationForm:FormGroup;
  token:any;
  returnedUsername:any;
  showError:boolean;

  constructor(private commonService:CommonService, private auth:Auth, private _fb:FormBuilder) {
    this.registrationForm=this._fb.group({
      username:['', [Validators.required,CustomValidators.validateEmail]],
      password:['',[Validators.required,Validators.minLength(AppSettings._fetch().appServer.passwordLength)]],
      retypePassword:['',[Validators.required,Validators.minLength(AppSettings._fetch().appServer.passwordLength)]]
    })
  }

  registerUser() {
    if(this.registrationForm.valid){
      this.commonService.setData(
        this.registrationForm.value
      );
      this.commonService.setUrl('user/register/');
      this.commonService.postData().subscribe(
        data=> {
          console.log("--------------" + JSON.stringify(data));
          if (data.token && data.username) {
            this.token = data.token;
            this.returnedUsername = data.username;
            this.auth.setUserData(this.token, this.returnedUsername);
          }
        },
        error=>console.log(JSON.stringify(error))
      )
    }
    else{
      this.showError=true;
    }
  }

}
