import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { Event, Rating } from '../models/event';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
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
      Event.imageId=mainImage.id;
      Event.imageUrl=mainImage.imageUrl;
      Event.imageIdCloudinary=mainImage.imageId
      Event.createdAt=new Date();
      Event.lastModifiedAt=new Date();
      // paladin the user who created it
      //Event.setLastModified_by(event.getCreated_by());
      Event.viewsCounter=0;
      Event.interestedCounter=0;
      Event.rating=0;
      console.log(Event)
      return  this.http.post<Event>(this.__URL+this.eventURL+'/addEvent',Event)
  
    }
  
  //-----------------------------------Get ALL EVENTS--------------------------------------
  getAllEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.__URL+this.eventURL+'/Allevents')
  }
  //------------------------------------------------------------------------------------------
  //-----------------------------------Fetch EVENT--------------------------------------
  fetchEventById(id : number):Observable<Event>{
    return this.http.get<Event>(this.__URL+this.eventURL+'/fetchEventById/'+id)
  }
  fetchEventByName(name : string):Observable<Event>{
    return this.http.get<Event>(this.__URL+this.eventURL+'/fetchEventByName/'+name)
  }
  //------------------------------------------------------------------------------------------
    //-----------------------------------Rating related URLS-------------------------------------
    addRating(Rating:Rating):Observable<Event>{
      //return  this.http.post<Event>("http://localhost:8222/api/Event/Events/addEvent",Event)
   
      return  this.http.post<Event>(this.__URL+this.ratingURL+'/addRating',Rating)
  
    }
  //-------------------------------- ------------------------------
  //--------------------------------Image related URLS ------------------------------
  public list(): Observable<Image[]> {
    return this.http.get<Image[]>(this.__URL+this.imageURL + '/list');
  }
  public imagesForEvent(eventId : number): Observable<Image[]> {
    return this.http.get<Image[]>(this.__URL+this.imageURL + '/list/'+eventId);
  }
  
  public uploadForEvent(image: File,eventId:number): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.http.post<any>(this.__URL+this.imageURL + "/upload/"+eventId, formData);
  }
  public upload(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.http.post<any>(this.__URL+this.imageURL + "/upload", formData);
  }
  
  public delete(id: any): Observable<any> {
    return this.http.delete<any>(this.__URL+this.imageURL + `/delete/${id}`);
  }
  //-------------------------------------------------------------
  
}
