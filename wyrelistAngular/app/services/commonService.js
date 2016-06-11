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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require('rxjs/add/operator/map');
const auth_1 = require("./auth");
const appSettings_1 = require("../config/appSettings");
//import {Observable} from "rxjs/Rx";
//import {Observer} from "rxjs/Observer";
let CommonService = class CommonService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    setHeader(headers) {
        var username = this.auth.getUserName();
        var token = this.auth.getUserToken();
        //alert(username,token);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //username ?  : "";
        if (token && token != "") {
            console.log("token found");
        }
    }
    setUrl(url) {
        this.url = appSettings_1.AppSettings._fetch().appServer.url + url;
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        var headers = new http_1.Headers();
        this.setHeader(headers);
        return this.http.get(this.url)
            .map((response) => response.json());
    }
    postData() {
        var headers = new http_1.Headers();
        this.setHeader(headers);
        var requestdata = this.convertRequestParams();
        return this.http.post(this.url, requestdata, { headers: headers }).map((response) => response.json());
    }
    convertRequestParams() {
        var requestParam = "";
        var totalParams = Object.keys(this.data).length;
        for (var i in this.data) {
            var lastKey = Object.keys(this.data).indexOf(i) == (totalParams - 1);
            requestParam += (i + "=" + this.data[i] + (lastKey ? "" : "&"));
        }
        return requestParam ? (requestParam) : "";
    }
};
CommonService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, auth_1.Auth])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=commonService.js.map