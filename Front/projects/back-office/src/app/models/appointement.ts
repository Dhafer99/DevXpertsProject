export class Appointement {


    id!:number ;
    startTime!: Date;
    endTime!: Date ;
    eventName!: string ;
    receiver!:number;
    sender!:number;
    isAllDay: false;

  
}
export class calenderEvent{
    start!:Date;
    end!:Date;
    title:string="Available";
    color:string="green  "
}