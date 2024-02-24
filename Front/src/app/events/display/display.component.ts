import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  event: Event = new Event;
  constructor( 
    private router: Router,
    private acr: ActivatedRoute,
    private eventService: EventServiceService,
    )
    {}
  ngOnInit(): void {
    this.acr.params.subscribe(params => {
      this.event.name=params['name']; 
      this.eventService.fetchEventByName(this.event.name).subscribe((result)=> {
        this.event= result;
        console.log(this.event)
     })
    })
    }

    fetchEvent(){
      
    }
}
