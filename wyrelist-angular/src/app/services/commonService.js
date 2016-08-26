var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var environment_1 = require('../environment');
//import {Observable} from "rxjs/Rx";
//import {Observer} from "rxjs/Observer";
var CommonService = (function () {
    function CommonService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    CommonService.prototype.setHeader = function (headers) {
        var username = this.auth.getUserName();
        var token = this.auth.getUserToken();
        //alert(username,token);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //username ?  : "";
        if (token && token != "") {
            console.log("token found");
        }
    };
    CommonService.prototype.setUrl = function (url) {
        this.url = environment_1.environment.serverUrl + url;
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
        var requestdata = this.convertRequestParams();
        return this.http.post(this.url, requestdata, { headers: headers }).map(function (response) { return response.json(); });
    };
    CommonService.prototype.convertRequestParams = function () {
        var requestParam = "";
        var totalParams = Object.keys(this.data).length;
        for (var i in this.data) {
            var lastKey = Object.keys(this.data).indexOf(i) == (totalParams - 1);
            requestParam += (i + "=" + this.data[i] + (lastKey ? "" : "&"));
        }
        return requestParam ? (requestParam) : "";
    };
    CommonService = __decorate([
        core_1.Injectable()
    ], CommonService);
    return CommonService;
})();
exports.CommonService = CommonService;
//# sourceMappingURL=commonService.js.map