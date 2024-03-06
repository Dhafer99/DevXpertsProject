import { Component , NgZone, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventSettingsModel, ScheduleModule, View,SelectEventArgs ,CellClickEventArgs, PopupOpenEventArgs, Schedule, DragEventArgs, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { ClassroomService } from '../../services/classroom.service';
import { Router } from '@angular/router';
import { Appointement } from '../../models/appointement';
@Component({
  selector: 'app-calender',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  //template: '<ejs-schedule> </ejs-schedule>',
 templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})



export class CalenderComponent  implements OnInit{
constructor(private ngZone: NgZone, private router: Router, private calenderadd :ClassroomService ){}
// private Classroomadd :ClassroomService

 // public selectedDate: Date = new Date(2018, 1, 15);

  sentTime : any ={
  id: 2,
  eventName: 'Test',
  startTime: new Date(2024, 2, 19, 10, 0),
  endTime: new Date(2024, 2, 19, 11, 30),
  isAllDay: false,
  IsBlock : true, 
  receiver:0,
  sender:0
 }

 public showForms : boolean = false ;
  public selectedDate: Date = new Date(2024, 2, 19);
 public currentView: View = 'Month';
 public data: Appointement [] = [{
  id: 2,
  eventName: 'Test',
  startTime: new Date(2024, 2, 23, 9, 0),
  endTime: new Date(2024, 2, 23, 11, 30),
  isAllDay: false,
  sender:0,
  receiver:0
}]; /// lista hedhi besh te5edha mel base 
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,//lista li 5ddhetha mel base besh t3awedha this.data
    fields: {
      id: 'id',
      subject: { name: 'eventName' ,default:'Fares'},
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    } }
    AppoimentForm !:FormGroup;
    gethouers : number ;
    getMinuts : number ;
    getdate : Date ;
    


   // selectedDate.getMinutes()+30
    //eventSettings: EventSettingsModel
    ngOnInit(): void {
      
      //this.id=this.acr.snapshot.params['id']
      this.AppoimentForm=new FormGroup({
       
        eventName:new FormControl('',Validators.required),
        receiver:new FormControl('',Validators.required),
        
      }
      )
      this.getAppoitments(); 
      
    }

      runOutsideAngular() {
        Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);
        this.ngZone.runOutsideAngular(() => {
          console.log('Running outside Angular zone');
          
          // Perform tasks that don't trigger Angular change detection here
    
          // If you need to update the UI, use NgZone.run to re-enter the zone
          this.ngZone.run(() => {
            let scheduleObj: Schedule = new Schedule({
              height: '650px',
              selectedDate: new Date(2024, 2, 19),
              eventSettings: this.eventSettings,//eventsettings li 7atit feha data
              dragStart: (args: DragEventArgs) => {
                args.navigation!.enable = true;
              },
              popupOpen: (args: PopupOpenEventArgs) => {
               // let isEmptyCell = args.target!.classList.contains('e-work-cells') ||args.target!.classList.contains('e-header-cells'); // checking whether the cell is empty or not
                if ((args.type === 'QuickInfo' || args.type === 'Editor') ) {
                  args.cancel = true;
                }
              }
              
            });
            scheduleObj.cellClick = this.onCellSelected.bind(this);
            scheduleObj.appendTo('#Schedule');
            
          });
       

        });
      

      }

      onCellSelected(args: CellClickEventArgs): void {
        // You can customize this logic based on your requirements
        const selectedDate: Date = args.startTime || this.selectedDate;
          
        // Open your form or modal for adding an event
        // You can use the selectedDate to pre-fill the form if needed
        console.log('selected day:', selectedDate )
        console.log('Selected Date:', selectedDate.getHours());
        console.log('Selected Date:', selectedDate.getMinutes()+30);
        this.getdate = selectedDate ;
        this.gethouers = selectedDate.getHours();
        this.getMinuts = selectedDate.getMinutes()+30 ;
        if(this.showForms=== true){ this.showForms= false}  else {this.showForms = true}
        // Reset the form for a new event
        this.AppoimentForm.reset();
      
        console.log(this.showForms)
       
      }

      submit(){
       this.sentTime.eventName =this.AppoimentForm.value.eventName
        this.sentTime.startTime = this.getdate
       //this.sentTime.startTime =  new Date(2024, 2, 19, this.gethouersFN(), 0),
       this.sentTime.endTime = this.getdate
       this.sentTime.endTime.setMinutes(this.sentTime.endTime.getMinutes() + 30);
       this.sentTime.receiver = this.AppoimentForm.value.receiver;
       
       this.calenderadd.addAppointement(this.sentTime).subscribe((data:any) =>
       {
        console.log(data);
        this.getAppoitments();
        location.reload();
       }
       )
      }

      getAppoitments(){
        
        this.calenderadd.getAllAppointement().subscribe((data:any) =>
        {
         console.log(data);
         this.eventSettings.dataSource= data;
         this.runOutsideAngular();
        }
        )
       
       }
       
      gethouersFN(){
        
         
        return this.gethouers;


      }

      getMinutsFN(){
        return this.getMinuts;

      }

      getdateFN(){
        return this.getdate;
      }

      showForm(){
        this.showForms != this.showForms
      }


      add(){

       // this.calenderadd.addAppointement(this.AppoimentForm.value).subscribe(()=>{
       // console.log( " Appointement added")
       // console.log("Appointement"+JSON.stringify(this.AppoimentForm.value))})
       
          

        

        }
      






   /*    add(){
         this.ngZone.Calender.(this.AppoimentForm.value).subscribe(()=>{
          console.log( "classroom added")
          console.log("classroom"+JSON.stringify(this.showForms.value))})
          this.goToClassroomList();
        }
  
        goToClassroomList(){
          this.router.navigate(['/add_Appointement']); 
        }
       */
     //ngZone

      // ------------------------- Code time ---------------

  
      





      
} 