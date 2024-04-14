import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

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
  
}
