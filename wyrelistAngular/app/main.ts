import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {provide} from "@angular/core";
import {LocationStrategy, PathLocationStrategy} from "@angular/common"
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Router } from '@angular/router-deprecated';
//import {Router} from '@angular/router'
import {LoginComponent} from './components/login'
//import {RegisterComponent} from './components/register';
import {EventListComponent} from './components/event/eventList/eventList'
import {EventDetailComponent} from './components/event/eventDetail/eventDetail'
import {UserRegistrationComponent} from './components/user/registerUser';
import {CommonService} from "./services/commonService";
import {Auth} from "./services/auth";

import {NgZone} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';


@Component({
    selector: 'route',
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
    templateUrl: '/app/templates/routeLayout.html',
    styles: ['.body{margin-top:100px}'],
})
@RouteConfig([
    {path: '/login', component: LoginComponent, name: 'Login'},
    {path: '/register', component: UserRegistrationComponent, name: 'RegisterUser'},
    {path: '/events', component: EventListComponent, name: 'EventList'},
    {path: '/event/:id', component: EventDetailComponent, name: 'EventDetail'},
    {path: '/', redirectTo: ['RegisterUser']},

])
class Route {
    logedInUserName:string;
    userToken:string;

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

    //}

}
bootstrap(
    Route,
    [ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: PathLocationStrategy}),
        Auth,
        CommonService
    ]
);
