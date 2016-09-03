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
var Rx_1 = require('rxjs/Rx');
var CommonService = (function () {
    function CommonService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    CommonService.prototype.setHeader = function (headers) {
        var token = this.auth.getUserToken();
        headers.append('Content-Type', 'application/json');
        if (token && token != "") {
            headers.append('Authorization', 'Token ' + token);
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
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: this.url,
            headers: headers
        });
        return this.http.request(new http_1.Request(this.requestoptions))
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 500) {
                console.log("error------------------500");
            }
            else if (error.status === 400) {
                console.log("error------------------500");
            }
            return Rx_1.Observable.throw(new Error(error.status));
        });
    };
    CommonService.prototype.postData = function () {
        var headers = new http_1.Headers();
        this.setHeader(headers);
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            url: this.url,
            headers: headers,
            body: JSON.stringify(this.data)
        });
        //var requestdata = this.convertRequestParams();
        return this.http.request(new http_1.Request(this.requestoptions))
            .map(function (response) {
            return response.json();
            //return [{ status: res.status, json: res }]
        }).catch(function (error) {
            if (error.status === 500) {
                console.log("error------------------500");
            }
            else if (error.status === 400) {
                console.log("error------------------500");
            }
            return Rx_1.Observable.throw(new Error(error.status));
        });
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