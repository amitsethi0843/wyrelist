import {Injectable,EventEmitter} from "@angular/core";
import {Http,Headers,RequestMethod,RequestOptions,Request,Response} from "@angular/http"
import {Auth} from "./auth"
import {AppSettings} from "../config/appSettings"
import 'rxjs/add/operator/map'
import { environment } from '../environment';
//import {Observable} from "rxjs/Rx";
//import {Observer} from "rxjs/Observer";
import {Observable} from 'rxjs/Rx';



@Injectable()
export class CommonService {
  url:string;
  data:any;
  requestoptions: RequestOptions;
  constructor(private http:Http, private auth:Auth) {
  }

  setHeader(headers:Headers) {
    var token:string = this.auth.getUserToken();
    headers.append('Content-Type', 'application/json');
    if (token && token != "") {
      headers.append('Authorization', 'Token '+token);
    }
  }

  setUrl(url:string) {
    this.url = environment.serverUrl + url
  }

  setData(data:any) {
    this.data = data;
  }

  getData() {
    var headers = new Headers();
    this.setHeader(headers);
    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.url,
      headers: headers,
    });
    return this.http.request(new Request(this.requestoptions))
      .map((response) => {
        return response.json();
      })
      .catch((error: any) => {
        if (error.status === 500) {
          console.log("error------------------500");
        }
        else if (error.status === 400) {
          console.log("error------------------500");
        }
        return Observable.throw(new Error(error.status))
      });
  }

  postData() {
    var headers = new Headers();
    this.setHeader(headers);
    this.requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: this.url,
      headers: headers,
      body: JSON.stringify(this.data)
    });
    //var requestdata = this.convertRequestParams();
    return this.http.request(new Request(this.requestoptions))
      .map((response) => {
        return response.json();
        //return [{ status: res.status, json: res }]
      }).catch((error: any) => {
        if (error.status === 500) {
          console.log("error------------------500");
        }
        else if (error.status === 400) {
          console.log("error------------------500");
        }
        return Observable.throw(new Error(error.status))
      });
  }


  convertRequestParams() {
    var requestParam = "";
    var totalParams = Object.keys(this.data).length;
    for (var i in this.data) {
      var lastKey = Object.keys(this.data).indexOf(i) == (totalParams - 1);
      requestParam += (i + "=" + this.data[i] + (lastKey ? "" : "&"))
    }
    return requestParam ? (requestParam) : ""
  }
}
