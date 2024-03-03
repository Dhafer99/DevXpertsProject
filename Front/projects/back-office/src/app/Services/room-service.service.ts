import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
   
    } );
 
  }
  UpdateRoom ( data: any  ): Observable<any> 
  {
    return this.http.put<any>( this.url + 'updateRoom', data );
  
  }


  UpdatePriceAuction ( points: number,id:number  ): Observable<any> {
    return this.http.put<any>(`${this.url}updatePrice/${points}/${id}`, {});
  }

  private auctionEndedSource = new Subject<void>();

  auctionEnded$ = this.auctionEndedSource.asObservable();

  endAuction(): void {
    this.auctionEndedSource.next();
  }


  public calculateTotalAmountFor50pt ( quantiyy: number ): Observable<any>
  {
    return this.http.get<any>(`${this.url}calculateTotalAmountFor50pt/${quantiyy}`, {});

 
  }
  public calculateTotalAmountFor100pt ( quantiyy: number ): Observable<any>
  {
    return this.http.get<any>(`${this.url}calculateTotalAmountFor100pt/${quantiyy}`, {});

 
  }
  public calculateTotalAmountFor150pt ( quantiyy: number ): Observable<any>
  {
    return this.http.get<any>(`${this.url}calculateTotalAmountFor150pt/${quantiyy}`, {});

 
  }
}
