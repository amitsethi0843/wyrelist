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
var home_1 = require('./components/home');
var eventList_1 = require('./components/event/eventList/eventList');
var eventDetail_1 = require('./components/event/eventDetail/eventDetail');
var addEvent_1 = require('./components/event/addEvent/addEvent');
var about_1 = require('./components/about');
var AppComponent = (function () {
    function AppComponent(router, auth, customEventsService) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.customEventsService = customEventsService;
        this.showSidePanel = true;
        this.title = "Wyrelist";
        this.auth.dataChange.subscribe(function (data) {
            _this.userToken = data[0];
            _this.logedInUserName = data[1];
            if (_this.userToken) {
                _this.router.navigate(['EventList']);
            }
            else {
                _this.router.navigate(['Home']);
            }
        });
        this.customEventsService.sidePanelVisibilityChange.subscribe(function (data) {
            _this.showSidePanel = data;
        });
        this.userToken = auth.getUserToken();
        this.logedInUserName = auth.getUserName();
        if (this.userToken) {
            this.router.navigate(['EventList']);
        }
        else {
            this.router.navigate(['Home']);
        }
    }
    AppComponent.prototype.enableSidePanel = function () {
        this.showSidePanel = true;
    };
    AppComponent.prototype.disableSidePabel = function () {
        this.showSidePanel = false;
    };
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
            { path: '/', component: home_1.HomeComponent, name: 'Home' },
            { path: '/login', component: login_1.LoginComponent, name: 'Login' },
            { path: '/register', component: registerUser_1.UserRegistrationComponent, name: 'RegisterUser' },
            { path: '/events', component: eventList_1.EventListComponent, name: 'EventList' },
            { path: '/event/:id', component: eventDetail_1.EventDetailComponent, name: 'EventDetail' },
            { path: '/addEvent', component: addEvent_1.AddEventComponent, name: 'AddEvent' },
            { path: '/about', component: about_1.AboutComponent, name: 'About' },
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map