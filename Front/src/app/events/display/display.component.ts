import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  rate:any
  event: Event = new Event;
  idUser:any=1
  myform!:FormGroup;
  constructor( 
    private router: Router,
    private acr: ActivatedRoute,
    private eventService: EventServiceService,
    )
    {}

  ngOnInit(): void {
    this.myform=new FormGroup({
      comment:new FormControl(''),
      rating:new FormControl(0),
      userID: new FormControl(0),
    eventID: new FormControl(0),
    id:new FormControl(0)
    })
    this.acr.params.subscribe(params => {
      this.fetchEvent(params['name']);
   
    })
   
   
  }

    fetchEvent(name:string){
      this.event.name=name 
      this.eventService.fetchEventByName(this.event.name).subscribe((result)=> {
        this.event= result;
       const rate= this.event.ratings?.find((rate)=>rate.userID==this.idUser) ||undefined
        
        this.myform.setValue({
          userID:this.idUser,
          eventID: this.event.id,

            comment:rate?.comment ||'',
            rating:rate?.rating ||0,
            id:rate?.id ||0

        });
        
        console.log(this.event)
     })
    }

    add() {
      console.log(this.myform.value)
        this.eventService
        .addRating(this.myform.value)
        .subscribe((response) => {
          this.event=response
          this.fetchEvent(this.event.name);
        });
      }
      




    }

