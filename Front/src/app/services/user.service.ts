import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  userUrl ='http://localhost:8222/auth';

  constructor(private http:HttpClient) { }

  register(formData:FormData): Observable<any> {
    return this.http.post<any>(this.userUrl+'/register',formData)
  }
  getUser(id:String): Observable<any> {
    return this.http.get<any>(this.userUrl+'/currentUser/'+id)
  }


  //----------------------Image THINGS ------------------------------
  deleteImage(id:String) : Observable<Image>{
    return this.http.get<Image>(this.userUrl+"Image/delete/"+id)
  }
   upload(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.http.post<any>(this.userUrl+ "Image/upload", formData);
  }
}
