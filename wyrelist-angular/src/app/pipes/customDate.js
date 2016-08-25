var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ParseDate = (function () {
    function ParseDate() {
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "July",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
    }
    ParseDate.prototype.transform = function (val, arg) {
        console.log(val + "============" + arg);
        var stringList = val.split("-");
        var date = new Date(stringList[0], stringList[1] - 1, stringList[2]);
        var output = date.getDate() + " " + this.monthNames[date.getMonth()] + ", " + date.getFullYear();
        return output;
    };
    ParseDate = __decorate([
        core_1.Pipe({
            name: "parseDate"
        })
    ], ParseDate);
    return ParseDate;
})();
exports.ParseDate = ParseDate;
//# sourceMappingURL=customDate.js.map