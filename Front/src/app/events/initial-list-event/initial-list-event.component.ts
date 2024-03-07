import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-initial-list-event',
  templateUrl: './initial-list-event.component.html',
  styleUrls: ['./initial-list-event.component.css']
})
export class InitialListEventComponent implements OnInit{

  eventList:Event[]=[]
  constructor(private eventService:EventServiceService){}
  ngOnInit(): void {

    this.fetchInitialList()

  }

  fetchInitialList(){
   this.eventService.getClosestEvents().subscribe((data)=>{
    console.log(data)
    this.eventList=data
   })
  }


}
