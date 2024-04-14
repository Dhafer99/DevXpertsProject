import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  userUrl ='http://localhost:8222/auth/';

  constructor(private http:HttpClient) { }

  register(formData:FormData): Observable<any> {
    return this.http.post<any>(this.userUrl+'register',formData)
  }
  getUser(id:String): Observable<any> {
    return this.http.get<any>(this.userUrl+'currentUser/'+id)
  }
  

/************************* adds from eya  */
  affecterRoomTouser(idroom: number , iduser:number,points:number): Observable<any> {
    
    return this.http.put<any>(`${this.userUrl}affecterRoomToUser/${idroom}/${iduser}/${points}`, {} );
  }


  getRoomId(iduser:number): Observable<any> {
    
    return this.http.get<any>(`${this.userUrl}getRoomUser/${iduser}` );
  }
}