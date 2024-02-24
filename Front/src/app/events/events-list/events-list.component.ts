import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit{
  constructor(
    private router: Router,
    private acr: ActivatedRoute,
    private eventService: EventServiceService
   ){
  }
  eventList : Event[] =[]
  ngOnInit(): void {
    this.fetchEvents();

    throw new Error('Method not implemented.');
  }

  fetchEvents(){
    this.eventService.getAllEvents().subscribe((data)=>
      { 
        this.eventList=data;
      }
    )
  }

}
