"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'moment': 'vendor/moment/min/moment.min.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap/ng2-bootstrap'
};
/** User packages configuration. */
var packages = {
    // ng2-bootstrap packages
    'vendor/ng2-bootstrap': {
        defaultExtension: 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    'ng2-bootstrap',
    // App specific barrels.
    'app',
    'app/shared',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    var main;
    if (barrelName === 'rxjs') {
        cliSystemConfigPackages[barrelName] = { main: 'rx', defaultExtension: 'js' };
    }
    else {
        cliSystemConfigPackages[barrelName] = { main: 'index' };
    }
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map