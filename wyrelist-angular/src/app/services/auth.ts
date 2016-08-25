
import {Injectable,EventEmitter} from "@angular/core";
import {AppSettings} from "../config/appSettings"
@Injectable()
export class Auth {
    username:string;
    usertoken:string;
    //dataChange:Observable<any>;
    dataChange:EventEmitter<any>=new EventEmitter();
    //userTokenChange:EventEmitter ;
    //constructor() {
    //    this.dataChange=new EventEmitter();
    //    this.dataChange = new Observable((observer:Observer)=> {
    //        this.dataChange = observer;
    //    });
    //}

    appUrl:string = AppSettings._fetch().appServer.url;
    googleMapKey:string = "AIzaSyDuM08PJs00SK8Xyclb0DKaWz0_sMFtqwI";

    getGoogleMapKey() {
        return this.googleMapKey
    }

    getUserToken() {
        return localStorage.getItem('userToken');
    }

    getUserName() {
        return localStorage.getItem('username');
    }

    setUserName(username:string) {
        this.username = username;
        //this.usernameChange.emit(username);

        localStorage.setItem('username', this.username);
    }

    setUserToken(token:string) {
        this.usertoken = token;
        //this.userTokenChange.emit(token);
        localStorage.setItem('userToken', this.usertoken);

    }

    setUserData(token:string, username:string) {
        this.usertoken = token;
        this.username = username;
        localStorage.setItem('username', this.username);
        localStorage.setItem('userToken', this.usertoken);
        this.dataChange.emit([this.usertoken,this.username]);
    }

    removeUserName() {
        localStorage.removeItem('username');
        this.username = null

    }

    removeUserToken() {
        localStorage.removeItem('userToken');
        this.usertoken = null;
    }

    removeUserData() {
        localStorage.removeItem('username');
        this.username = null;
        localStorage.removeItem('userToken');
        this.usertoken = null;
        this.dataChange.emit([this.usertoken,this.username]);
    }
}