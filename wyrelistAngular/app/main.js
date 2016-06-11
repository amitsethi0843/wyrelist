"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const core_1 = require("@angular/core");
const core_2 = require("@angular/core");
const common_1 = require("@angular/common");
const router_deprecated_1 = require('@angular/router-deprecated');
//import {Router} from '@angular/router'
const login_1 = require('./components/login');
//import {RegisterComponent} from './components/register';
const eventList_1 = require('./components/event/eventList/eventList');
const eventDetail_1 = require('./components/event/eventDetail/eventDetail');
const registerUser_1 = require('./components/user/registerUser');
const commonService_1 = require("./services/commonService");
const auth_1 = require("./services/auth");
require('rxjs/add/operator/share');
let Route = class Route {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.auth.dataChange.subscribe(data => {
            this.userToken = data[0];
            this.logedInUserName = data[1];
            if (this.userToken) {
                this.router.navigate(['EventList']);
            }
            else {
                this.router.navigate(['RegisterUser']);
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
            this.router.navigate(['EventList']);
        }
        else {
            this.router.navigate(['RegisterUser']);
        }
    }
    logout() {
        this.auth.removeUserData();
    }
};
Route = __decorate([
    core_1.Component({
        selector: 'route',
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        pipes: [],
        templateUrl: '/app/templates/routeLayout.html',
        styles: ['.body{margin-top:100px}'],
    }),
    router_deprecated_1.RouteConfig([
        { path: '/login', component: login_1.LoginComponent, name: 'Login' },
        { path: '/register', component: registerUser_1.UserRegistrationComponent, name: 'RegisterUser' },
        { path: '/events', component: eventList_1.EventListComponent, name: 'EventList' },
        { path: '/event/:id', component: eventDetail_1.EventDetailComponent, name: 'EventDetail' },
        { path: '/', redirectTo: ['RegisterUser'] },
    ]), 
    __metadata('design:paramtypes', [router_deprecated_1.Router, auth_1.Auth])
], Route);
platform_browser_dynamic_1.bootstrap(Route, [router_deprecated_1.ROUTER_PROVIDERS,
    core_2.provide(common_1.LocationStrategy, { useClass: common_1.PathLocationStrategy }),
    auth_1.Auth,
    commonService_1.CommonService
]);
//# sourceMappingURL=main.js.map