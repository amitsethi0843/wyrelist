import {Injectable,EventEmitter} from "angular2/core";
import {Http,Headers} from "angular2/http"
import 'rxjs/add/operator/map'


@Injectable()
export class Config {
    username:string
    usertoken:string
    usernameChange:EventEmitter = new EventEmitter();
    userTokenChange:EventEmitter = new EventEmitter();


    appUrl:string = "http://127.0.0.1:8000/";

    static getUserToken() {
        return localStorage.getItem('userToken');
    }

    static getUserName() {
        return localStorage.getItem('username');
    }

    setUserName(username:string) {
        this.username = username;
        this.usernameChange.emit(username);
        localStorage.setItem('username', this.username);
    }

    setUserToken(token:string) {
        this.usertoken = token;
        this.userTokenChange.emit(token);
        localStorage.setItem('userToken', this.usertoken);
    }
}

@Injectable()
export class CommonService {
    url:string;
    data:string;

    constructor(private http:Http, private config:Config) {
    }

    setHeader(headers:Headers){
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('username',this.config.getUserName)
        headers.append('token',this.config.getUserToken)
    }

    setUrl(url:string) {
        this.url = this.config.appUrl + url
    }

    setData(data:string) {
        this.data = data;
    }

    getData() {
        var headers = new Headers();
        this.setHeader(headers);
        return this.http.get(this.url)
            .map((response) => response.json());
    }

    postData() {
        var headers = new Headers();
        this.setHeader(headers);
        return this.http.post(this.url, this.data, {headers: headers})
            .map((response) => response.json());
    }
}