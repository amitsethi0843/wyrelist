var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var core_2 = require('angular2/core');
var router_1 = require('angular2/router');
var login_1 = require('./components/login');
var registerUser_1 = require('./components/user/registerUser');
var commonService_1 = require("./services/commonService");
var restaurantService_1 = require("./services/restaurantService");
require('rxjs/add/operator/share');
var Route = (function () {
    function Route(router, config) {
        this.router = router;
        this.config = config;
        this.userToken = config.getUserToken();
        this.logedInUserName = config.getUserName();
        if (this.userToken) {
            this.router.navigate(['Login']);
        }
        else {
            this.router.navigate(['RegisterUser']);
        }
    }
    Route.prototype.logout = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('userToken');
        this.logedInUserName = null;
        this.userToken = null;
        location.reload();
    };
    Route = __decorate([
        core_1.Component({
            selector: 'route',
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet],
            providers: [commonService_1.Config],
            pipes: [],
            templateUrl: '/app/templates/routeLayout.html',
            styles: ['.body{margin-top:100px}']
        }),
        router_1.RouteConfig([
            { path: '/login', component: login_1.LoginComponent, name: 'Login' },
            { path: '/register', component: registerUser_1.UserRegistrationComponent, name: 'RegisterUser' },
            { path: '/', redirectTo: ['RegisterUser'] }
        ])
    ], Route);
    return Route;
})();
browser_1.bootstrap(Route, [router_1.ROUTER_PROVIDERS,
    core_2.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy }),
    commonService_1.Config,
    commonService_1.CommonService,
    restaurantService_1.RestaurantService]);
//# sourceMappingURL=main.js.map