var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var SelectDirective = (function () {
    function SelectDirective() {
        this.modelChanged = new core_1.EventEmitter();
    }
    SelectDirective.prototype.ngOnInit = function () {
        this.modelChanged.emit(this.requiredModel);
    };
    __decorate([
        core_1.Input()
    ], SelectDirective.prototype, "name");
    __decorate([
        core_1.Input()
    ], SelectDirective.prototype, "id");
    __decorate([
        core_1.Input()
    ], SelectDirective.prototype, "requiredModel");
    __decorate([
        core_1.Input()
    ], SelectDirective.prototype, "items");
    __decorate([
        core_1.Output()
    ], SelectDirective.prototype, "modelChanged");
    __decorate([
        core_1.Input()
    ], SelectDirective.prototype, "className");
    SelectDirective = __decorate([
        core_1.Component({
            selector: 'wyre-select',
            template: '<select class="{{className}}" (change)="modelChanged.emit($event.target.value)" [(ngModel)]="requiredModel" name="{{name}}" id="{{id}}">' +
                '<option selected="selected" value=""> Please Select</option>' +
                '<option *ngFor="#item of items" value="{{item}}">{{item}}</option>' +
                '</select>',
            host: {
                "[value]": 'requiredModel',
                "(input)": "modelChanged.next($event.target.value)"
            }
        })
    ], SelectDirective);
    return SelectDirective;
})();
exports.SelectDirective = SelectDirective;
//# sourceMappingURL=select.js.map