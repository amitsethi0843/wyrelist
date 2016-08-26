var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings._fetch = function () {
        return {
            appServer: {
                url: this.application.serverUrl,
                passwordLength: this.application.passwordLength
            },
            google: {
                map: {
                    key: this.google.map.key
                }
            }
        };
    };
    AppSettings.application = {
        passwordLength: 4
    };
    AppSettings.google = {
        map: {
            key: "AIzaSyDuM08PJs00SK8Xyclb0DKaWz0_sMFtqwI"
        }
    };
    return AppSettings;
})();
exports.AppSettings = AppSettings;
//# sourceMappingURL=appSettings.js.map