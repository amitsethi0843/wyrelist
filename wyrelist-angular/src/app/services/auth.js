var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var appSettings_1 = require("../config/appSettings");
var Auth = (function () {
    function Auth() {
        //dataChange:Observable<any>;
        this.dataChange = new core_1.EventEmitter();
        //userTokenChange:EventEmitter ;
        //constructor() {
        //    this.dataChange=new EventEmitter();
        //    this.dataChange = new Observable((observer:Observer)=> {
        //        this.dataChange = observer;
        //    });
        //}
        this.appUrl = appSettings_1.AppSettings._fetch().appServer.url;
        this.googleMapKey = "AIzaSyDuM08PJs00SK8Xyclb0DKaWz0_sMFtqwI";
    }
    Auth.prototype.getGoogleMapKey = function () {
        return this.googleMapKey;
    };
    Auth.prototype.getUserToken = function () {
        return localStorage.getItem('userToken');
    };
    Auth.prototype.getUserName = function () {
        return localStorage.getItem('username');
    };
    Auth.prototype.setUserName = function (username) {
        this.username = username;
        //this.usernameChange.emit(username);
        localStorage.setItem('username', this.username);
    };
    Auth.prototype.setUserToken = function (token) {
        this.usertoken = token;
        //this.userTokenChange.emit(token);
        localStorage.setItem('userToken', this.usertoken);
    };
    Auth.prototype.setUserData = function (token, username) {
        this.usertoken = token;
        this.username = username;
        localStorage.setItem('username', this.username);
        localStorage.setItem('userToken', this.usertoken);
        this.dataChange.emit([this.usertoken, this.username]);
    };
    Auth.prototype.removeUserName = function () {
        localStorage.removeItem('username');
        this.username = null;
    };
    Auth.prototype.removeUserToken = function () {
        localStorage.removeItem('userToken');
        this.usertoken = null;
    };
    Auth.prototype.removeUserData = function () {
        localStorage.removeItem('username');
        this.username = null;
        localStorage.removeItem('userToken');
        this.usertoken = null;
        this.dataChange.emit([this.usertoken, this.username]);
    };
    Auth = __decorate([
        core_1.Injectable()
    ], Auth);
    return Auth;
})();
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map