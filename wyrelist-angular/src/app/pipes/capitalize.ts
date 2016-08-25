import {Pipe} from "@angular/core"
import {PipeTransform} from "@angular/core";

@Pipe({
    name: "capitalize"
})

export class Capitalize implements PipeTransform {
    transform(val:any) {
        if (val) {
            val = val.toLowerCase();
            val=val.charAt(0).toUpperCase()+val.slice(1);
        }
        return val
    }
}