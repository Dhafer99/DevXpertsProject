import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{

  constructor(
    private router: Router,
    private acr: ActivatedRoute,
    private eventService: EventService
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
