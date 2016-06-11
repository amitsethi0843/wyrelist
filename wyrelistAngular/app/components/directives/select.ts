import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'wyre-select',
    template:'<select class="{{className}}" (change)="modelChanged.emit($event.target.value)" [(ngModel)]="requiredModel" name="{{name}}" id="{{id}}">' +
    '<option selected="selected" value=""> Please Select</option>' +
    '<option *ngFor="#item of items" value="{{item}}">{{item}}</option>' +
    '</select>',
    //host: {
    //    "[value]": 'requiredModel',
    //    "(input)": "modelChanged.next($event.target.value)"
    //}
})
//select #sel class="{{className}}" (change)="modelChanged.emit(sel.value)"
export class SelectDirective{
    @Input() name;
    @Input() id;
    @Input() requiredModel;
    @Input() items;
    //@Output() modelChanged:EventEmitter = new EventEmitter();
    @Input() className;

    //ngOnInit(){
    //    this.modelChanged.emit(this.requiredModel)
    //}

}