"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let SelectDirective = class SelectDirective {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SelectDirective.prototype, "name", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SelectDirective.prototype, "id", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SelectDirective.prototype, "requiredModel", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SelectDirective.prototype, "items", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SelectDirective.prototype, "className", void 0);
SelectDirective = __decorate([
    core_1.Component({
        selector: 'wyre-select',
        template: '<select class="{{className}}" (change)="modelChanged.emit($event.target.value)" [(ngModel)]="requiredModel" name="{{name}}" id="{{id}}">' +
            '<option selected="selected" value=""> Please Select</option>' +
            '<option *ngFor="#item of items" value="{{item}}">{{item}}</option>' +
            '</select>',
    }), 
    __metadata('design:paramtypes', [])
], SelectDirective);
exports.SelectDirective = SelectDirective;
//# sourceMappingURL=select.js.map