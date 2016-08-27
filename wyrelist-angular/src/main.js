var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var app_component_1 = require('./app/app.component');
var environment_1 = require('./app/environment');
var commonService_1 = require('./app/services/commonService');
var customEvents_1 = require('./app/services/customEvents');
var auth_1 = require('./app/services/auth');
var forms_1 = require('@angular/forms');
var router_deprecated_1 = require('@angular/router-deprecated');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.PathLocationStrategy }),
    auth_1.Auth, commonService_1.CommonService, customEvents_1.CustomEventsService, forms_1.disableDeprecatedForms(), forms_1.provideForms()
]);
//# sourceMappingURL=main.js.map