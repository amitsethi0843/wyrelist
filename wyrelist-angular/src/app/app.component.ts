import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Router } from '@angular/router-deprecated';
import {UserRegistrationComponent} from './components/user/registerUser';
import {LoginComponent} from './components/user/login'
import {EventListComponent} from './components/event/eventList/eventList';
import {EventDetailComponent} from './components/event/eventDetail/eventDetail';
import {AddEventComponent} from './components/event/addEvent/addEvent';
import {Auth} from "./services/auth";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: "../app/templates/routeLayout.html"
  //styleUrls: ['app.component.css']
})
@RouteConfig([
  {path: '/login', component: LoginComponent, name: 'Login'},
  {path: '/register', component: UserRegistrationComponent, name: 'RegisterUser'},
  {path: '/events', component: EventListComponent, name: 'EventList'},
  {path: '/event/:id', component: EventDetailComponent, name: 'EventDetail'},
  {path: '/addEvent', component: AddEventComponent, name: 'AddEvent'},

  {path: '/', redirectTo: ['RegisterUser']},

])
export class AppComponent {
  logedInUserName:string;
  userToken:string;
  title:string="Wyrelist"

  constructor(private router:Router,
              private auth:Auth) {
    this.auth.dataChange.subscribe(data=> {
      this.userToken = data[0];
      this.logedInUserName = data[1];
      if (this.userToken) {
        this.router.navigate(['EventList'])
      }
      else {
        this.router.navigate(['RegisterUser'])
      }
    });
    //    this.userToken = data[0];
    //    this.logedInUserName = data[1];
    //    if (this.userToken) {
    //        window.location.reload()
    //    }
    //    else {
    //        this.router.navigate(['RegisterUser'])
    //    }
    //});
    this.userToken = auth.getUserToken();
    this.logedInUserName = auth.getUserName();

    if (this.userToken) {
      this.router.navigate(['EventList'])
    }
    else {
      this.router.navigate(['RegisterUser'])
    }

  }


  logout() {
    this.auth.removeUserData();
  }

}
