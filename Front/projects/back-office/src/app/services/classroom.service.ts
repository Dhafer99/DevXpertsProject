import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
 classroomURL = 'http://localhost:8095/api/AppointementAndClassrooms'
  constructor(private http:HttpClient) { }

  getAllClassrooms():Observable<Classroom[]>{
    return this.http.get<Classroom[]>(this.classroomURL+'/all_Classroom')
  }


   addClassroom(Classroom:Classroom):Observable<Classroom[]>{
    return this.http.post<Classroom[]>(this.classroomURL+'/add_Classroom',Classroom)
  }


}
