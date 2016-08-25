import {Pipe} from "@angular/core"

@Pipe({
    name: "parseDate"
})

export class ParseDate {
    monthNames:any = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "July",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    transform(val, arg) {
        console.log(val + "============" + arg);
        var stringList = val.split("-");
        var date = new Date(stringList[0], stringList[1] - 1, stringList[2]);
        var output = date.getDate() + " " + this.monthNames[date.getMonth()] + ", " + date.getFullYear()
        return output
    }
}