var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var registerUser_1 = require('./components/user/registerUser');
var login_1 = require('./components/user/login');
var eventList_1 = require('./components/event/eventList/eventList');
var eventDetail_1 = require('./components/event/eventDetail/eventDetail');
var addEvent_1 = require('./components/event/addEvent/addEvent');
var AppComponent = (function () {
    function AppComponent(router, auth) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.title = "Wyrelist";
        this.auth.dataChange.subscribe(function (data) {
            _this.userToken = data[0];
            _this.logedInUserName = data[1];
            if (_this.userToken) {
                _this.router.navigate(['EventList']);
            }
            else {
                _this.router.navigate(['RegisterUser']);
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
    AppComponent.prototype.logout = function () {
        this.auth.removeUserData();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            templateUrl: "../app/templates/routeLayout.html"
        }),
        router_deprecated_1.RouteConfig([
            { path: '/login', component: login_1.LoginComponent, name: 'Login' },
            { path: '/register', component: registerUser_1.UserRegistrationComponent, name: 'RegisterUser' },
            { path: '/events', component: eventList_1.EventListComponent, name: 'EventList' },
            { path: '/event/:id', component: eventDetail_1.EventDetailComponent, name: 'EventDetail' },
            { path: '/addEvent', component: addEvent_1.AddEventComponent, name: 'AddEvent' },
            { path: '/', redirectTo: ['RegisterUser'] },
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map