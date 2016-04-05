///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router,RouterOutlet,
    LocationStrategy, PathLocationStrategy,ROUTER_PROVIDERS} from 'angular2/router';
import {LoginComponent} from './components/login'
import {RegisterComponent} from './components/register';
import {UserRegistrationComponent} from './components/user/registerUser';
import {Config,CommonService} from "./services/commonService";
import {RestaurantService} from "./services/restaurantService";
import {NgZone} from "angular2/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';


@Component({
    selector: 'route',
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
    providers: [Config],
    pipes: [],
    templateUrl: '/app/templates/routeLayout.html',
    styles: ['.body{margin-top:100px}'],
})
@RouteConfig([
    {path: '/login', component: LoginComponent, name: 'Login'},
    {path: '/register', component: UserRegistrationComponent, name: 'RegisterUser'},
    {path: '/', redirectTo: ['RegisterUser']}
])
class Route {
    logedInUserName:string;
    userToken:string;

    constructor(private router:Router, private config:Config) {
        this.userToken = config.getUserToken();
        this.logedInUserName = config.getUserName();

        if (this.userToken) {
            this.router.navigate(['Login'])
        }
        else {
            this.router.navigate(['RegisterUser'])
        }

    }


    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('userToken');
        this.logedInUserName = null;
        this.userToken = null;
        location.reload()
    }
}


bootstrap(
    Route,
    [ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: PathLocationStrategy}),
        Config,
        CommonService,
        RestaurantService]
);
