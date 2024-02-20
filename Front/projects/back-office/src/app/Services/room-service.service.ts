import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  url = "http://localhost:8083/api/rooms/";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  };
  constructor(private http: HttpClient ) { }

  addRoom ( data: any )
  {
    return this.http.post<any>( this.url + "addRoom", data );
  }

  public getAllRooms (  ): Observable<any>
  {
    return this.http.get<any>( this.url + "getAllRooms" );
  }

  public getRoomById ( id: number ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }${ id }`, {
      withCredentials: true,
    } );
 
  }
  UpdateRoom ( data: any  ): Observable<any> 
  {
    return this.http.put<any>( this.url + 'updateRoom', data );
  
  }

}
