import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  __URL = 'http://localhost:8091/api/Event'
  eventURL='/Events'
  interestURL='/Interest'
  ratingURL='/Rating'

  
  constructor(private http:HttpClient) { }
//-------------------------------ADD EVENT ------------------------------------------
  addEvent(Event:Event):Observable<Event>{
    //return  this.http.post<Event>("http://localhost:8222/api/Event/Events/addEvent",Event)
    return  this.http.post<Event>(this.__URL+this.eventURL+'/addEvent',Event)

  }
//------------------------------------------------------------------------------------
//-----------------------------------Get ALL EVENTS--------------------------------------
getAllEvents():Observable<Event[]>{
  return this.http.get<Event[]>(this.__URL+this.eventURL+'/Allevents')
}
//------------------------------------------------------------------------------------------
}
