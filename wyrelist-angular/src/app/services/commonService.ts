import {Injectable,EventEmitter} from "@angular/core";
import {Http,Headers} from "@angular/http"
import {Auth} from "./auth"
import {AppSettings} from "../config/appSettings"
import 'rxjs/add/operator/map'
import { environment } from '../environment';
//import {Observable} from "rxjs/Rx";
//import {Observer} from "rxjs/Observer";


@Injectable()
export class CommonService {
  url:string;
  data:any;

  constructor(private http:Http, private auth:Auth) {
  }

  setHeader(headers:Headers) {
    var username:string = this.auth.getUserName();
    var token:string = this.auth.getUserToken();
    //alert(username,token);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //username ?  : "";
    if (token && token != "") {
      console.log("token found");
      //    headers.append('token', token);
      //    if(username){
      //        headers.append('username', username)
      //    }
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
    return this.http.get(this.url)
      .map(response => response.json());
  }

  postData() {
    var headers = new Headers();
    this.setHeader(headers);
    var requestdata = this.convertRequestParams();
    return this.http.post(this.url, requestdata, {headers: headers}).map((response) => response.json())
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
