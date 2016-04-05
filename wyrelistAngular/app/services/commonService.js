var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
require('rxjs/add/operator/map');
var Config = (function () {
    function Config() {
        this.usernameChange = new core_1.EventEmitter();
        this.userTokenChange = new core_1.EventEmitter();
        this.appUrl = "http://127.0.0.1:8000/";
    }
    Config.getUserToken = function () {
        return localStorage.getItem('userToken');
    };
    Config.getUserName = function () {
        return localStorage.getItem('username');
    };
    Config.prototype.setUserName = function (username) {
        this.username = username;
        this.usernameChange.emit(username);
        localStorage.setItem('username', this.username);
    };
    Config.prototype.setUserToken = function (token) {
        this.usertoken = token;
        this.userTokenChange.emit(token);
        localStorage.setItem('userToken', this.usertoken);
    };
    Config = __decorate([
        core_1.Injectable()
    ], Config);
    return Config;
})();
exports.Config = Config;
var CommonService = (function () {
    function CommonService(http, config) {
        this.http = http;
        this.config = config;
    }
    CommonService.prototype.setHeader = function (headers) {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('username', this.config.getUserName);
        headers.append('token', this.config.getUserToken);
    };
    CommonService.prototype.setUrl = function (url) {
        this.url = this.config.appUrl + url;
    };
    CommonService.prototype.setData = function (data) {
        this.data = data;
    };
    CommonService.prototype.getData = function () {
        var headers = new http_1.Headers();
        this.setHeader(headers);
        return this.http.get(this.url)
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.postData = function () {
        var headers = new http_1.Headers();
        this.setHeader(headers);
        return this.http.post(this.url, this.data, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    CommonService = __decorate([
        core_1.Injectable()
    ], CommonService);
    return CommonService;
})();
exports.CommonService = CommonService;
//# sourceMappingURL=commonService.js.map