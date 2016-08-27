import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Router } from '@angular/router-deprecated';
import {UserRegistrationComponent} from './components/user/registerUser';
import {LoginComponent} from './components/user/login'
import {HomeComponent} from './components/home'
import {EventListComponent} from './components/event/eventList/eventList';
import {EventDetailComponent} from './components/event/eventDetail/eventDetail';
import {AddEventComponent} from './components/event/addEvent/addEvent';
import {AboutComponent} from './components/about';
import {Auth} from "./services/auth";
import {CustomEventsService} from "./services/customEvents";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: "../app/templates/routeLayout.html"
  //styleUrls: ['app.component.css']
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/login', component: LoginComponent, name: 'Login'},
  {path: '/register', component: UserRegistrationComponent, name: 'RegisterUser'},
  {path: '/events', component: EventListComponent, name: 'EventList'},
  {path: '/event/:id', component: EventDetailComponent, name: 'EventDetail'},
  {path: '/addEvent', component: AddEventComponent, name: 'AddEvent'},
  {path: '/about', component: AboutComponent, name: 'About'},
  //{path: '/', redirectTo: ['RegisterUser']},

])
export class AppComponent {
  logedInUserName:string;
  userToken:string;
  showSidePanel:boolean=true;
  title:string="Wyrelist";

  constructor(private router:Router,
              private auth:Auth,private customEventsService:CustomEventsService) {
    this.auth.dataChange.subscribe(data=> {
      this.userToken = data[0];
      this.logedInUserName = data[1];
      if (this.userToken) {
        this.router.navigate(['EventList'])
      }
      else {
        this.router.navigate(['Home'])
      }
    });

    this.customEventsService.sidePanelVisibilityChange.subscribe(data=>{
      this.showSidePanel=data
    })



    this.userToken = auth.getUserToken();
    this.logedInUserName = auth.getUserName();

    if (this.userToken) {
      this.router.navigate(['EventList'])
    }
    else {
      this.router.navigate(['Home'])
    }

  }
  enableSidePanel(){
    this.showSidePanel=true
  }
  disableSidePabel(){
    this.showSidePanel=false
  }
  logout() {
    this.auth.removeUserData();
  }

}
