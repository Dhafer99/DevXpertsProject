import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  __URL = 'http://localhost:8091/api/Event'
  eventURL='/Events'
  interestURL='/Interest'
  ratingURL='/Rating'
  imageURL='/cloudinary'
  
  constructor(private http:HttpClient) { }
//-------------------------------ADD EVENT ------------------------------------------
  addEvent(Event:Event,images:Image[],mainImage:Image):Observable<Event>{
    //return  this.http.post<Event>("http://localhost:8222/api/Event/Events/addEvent",Event)
    Event.images=images;
    Event.imageId=mainImage.imageId;
    Event.imageUrl=mainImage.imageUrl;
    return  this.http.post<Event>(this.__URL+this.eventURL+'/addEvent',Event)

  }
//------------------------------------------------------------------------------------
//-----------------------------------Get ALL EVENTS--------------------------------------
getAllEvents():Observable<Event[]>{
  return this.http.get<Event[]>(this.__URL+this.eventURL+'/Allevents')
}
//------------------------------------------------------------------------------------------

//--------------------------------Image related URLS ------------------------------
public list(): Observable<Image[]> {
  return this.http.get<Image[]>(this.__URL+this.imageURL + '/list');
}
public imagesForEvent(eventId : number): Observable<Image[]> {
  return this.http.get<Image[]>(this.__URL+this.imageURL + '/list/'+eventId);
}

public upload(image: File): Observable<any> {
  const formData = new FormData();
  formData.append('multipartFile', image);
  return this.http.post<any>(this.__URL+this.imageURL + '/upload', formData);
}

public delete(id: any): Observable<any> {
  return this.http.delete<any>(this.__URL+this.imageURL + `/delete/${id}`);
}
//-------------------------------------------------------------
}
