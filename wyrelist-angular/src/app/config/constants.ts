import {environment} from "../environment"
export class AppConstants {
  private static LocationType:any = {
    METROSTATION: ["METROSTATION", "Metro Station"],
    HOTEL: ["HOTEL", "Hotel"],
    RAILWAYSTATION: ["RAILWAYSTATION", "Railway Station"]
  };

  private static time:any = {
    hoursAmPm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    ampm: ["AM", "PM"],
    minutes: [0, 15, 30, 45]
  };

  private static dateInput:any = {
    date: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    year: ["2016", "2017", "2018", "2019", "2020"]
  };

   private static create_s3Url=function(url){
    if(url){
      url="http://"+environment.s3Config.bucketName+".s3.amazonaws.com"+url;
      return url
    }
    else{
      url=""
    }
    return url;
  }


  public static _fetch():any {
    return {
      locationType: this.LocationType,
      time: this.time,
      date: this.dateInput,
      createS3Url:this.create_s3Url
    }
  }

}
