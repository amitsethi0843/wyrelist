import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode,provide } from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from "@angular/common"
import { AppComponent } from './app/app.component';
import { environment } from './app/environment';
import {CommonService} from './app/services/commonService'
import {CustomEventsService} from './app/services/customEvents'
import {Auth} from './app/services/auth'
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {HTTP_PROVIDERS} from "@angular/http";



import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Router } from '@angular/router-deprecated';

if (environment.production) {
  enableProdMode();
}


bootstrap(
  AppComponent,
  [ROUTER_PROVIDERS,HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    Auth, CommonService,CustomEventsService, disableDeprecatedForms(), provideForms()
  ]
);

