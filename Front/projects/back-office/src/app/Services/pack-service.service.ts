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
  public getDetailsPackById ( id: number ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }retrievePackage/${ id }`, {
      withCredentials: true,
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
      withCredentials: true,
    } );
 
  }

  public findByTypePack ( typePack: string ): Observable<any>
  {
    return this.http.get<any>( `${ this.url }getpackBYType/${ typePack }`, {
      withCredentials: true,
    } );
 
  }
}
