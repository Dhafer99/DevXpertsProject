import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { EventType } from '../../models/event';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  @Input () x!:string;
  id:any; 
  myform!:FormGroup;

  eventType= EventType

  constructor(private router: Router,private acr:ActivatedRoute,private eventService:EventService) {}
  ngOnInit(): void {
   // this.id=this.acr.snapshot.params["id"];  
    this.myform=new FormGroup({
       type:new FormControl('',[Validators.required]),
       name:new FormControl ('',[Validators.required,Validators.minLength(6)]),
      // date:new FormControl('',[Validators.required]),
      // disableDate:new FormControl('',[Validators.required]),

    })
    throw new Error('Method not implemented.');
  }


  goToEventDisplay() {
    this.router.navigate(['/events/display']);
  }
  add(){
    this.eventService.addEvent(this.myform.value).subscribe ((response)=>{
        console.log(response)
      console.log("classroom"+JSON.stringify(this.myform.value))})
    }
  }
  

