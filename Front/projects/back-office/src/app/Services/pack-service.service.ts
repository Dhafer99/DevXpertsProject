import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackServiceService {


  
  url = "http://localhost:8083/api/packs/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  };
  constructor(private http: HttpClient ) { }
/********************* stat  */
public getPackStatisticsByYearAndStatus (  ): Observable<any>
{
  return this.http.get<any>( this.url + "getPackStatisticsByYearAndStatus" );
}

/********************* stat  */

  public getDetailsPackById ( id: number ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }retrievePackage/${ id }`, {
      
    } );
 
  }
  UpdatePack ( data: any ): Observable<any> 
  {
   
    return this.http.put<any>( this.url + 'updatePackage', data ,this.httpOptions);
  
  }
  addPack ( data: any )
  {
    return this.http.post<any>( this.url + "addPackge", data );
  }
  public getAllPacks (  ): Observable<any>
  {
    return this.http.get<any>( this.url + "getAllPacks" );
  }

  
  public findPacksByIdRoom ( id: number ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }findPacksByIdRoom/${ id }`, {
      
    } );
 
  }

  public findByTypePack ( typePack: string ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }getpackBYType/${ typePack }`, {
      
    } );
 
  }


  public RevenuePeTypePack ( typePack: string ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }RevenuePeTypePack/${ typePack }`, {
      
    } );
 
  }


  public calculateReservationPercentageByType (  ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }calculateReservationPercentageByType`, {
   
    } );
 
  }
  public toployalcustomers (  ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }toployalcustomers`, {
 
    } );
 
  }


  public SendCodeRoom(email: string, code: string): Observable<any> {
    return this.http.put<any>(`${this.url}SendCodeRoom/${email}/${code}`, {});
  }


  public QuantitePeTypePack ( typePack: string ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }QuantitePeTypePack/${ typePack }`, {
      
    } );
 
  }

  public revenueTotal (): Observable<any>
  {
    return this.http.get<any>( `${ this.url }revenueTotal`, {
      
    } );
 
  }
  
}