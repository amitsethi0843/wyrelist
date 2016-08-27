import {Component} from '@angular/core'
import {Input} from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES,FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {Auth} from "../../services/auth";
import {CommonService} from "../../services/commonService"
import {HTTP_PROVIDERS,Http} from "@angular/http";
import {CustomEventsService} from "../../services/customEvents";


@Component({
  templateUrl: '/app/templates/public/login.html',
  providers: [CommonService, HTTP_PROVIDERS],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent {

  loginForm:FormGroup;
  getData:string;
  showError:boolean;

  constructor(private auth:Auth, private _fb:FormBuilder, private commonService:CommonService, private customEventsService:CustomEventsService) {
    this.customEventsService.changeSidePanelVisibility(true);
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  loginUser() {
    if (this.loginForm.valid && this.loginForm.value.username && this.loginForm.value.password) {
      this.showError = false;
      this.commonService.setData(this.loginForm.value);
      this.commonService.setUrl("user/login/");
      //
      this.commonService.postData().subscribe(
        data=> {
          if (data.token && data.username) {
            this.auth.setUserData(data.token, data.username);
          }
        },
        error=>console.log("error"),
        ()=>console.log("finished")
      )
    }
    else {
      this.showError = true;
    }
  }
}
