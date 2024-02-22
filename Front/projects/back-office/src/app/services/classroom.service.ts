import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom';
import { Appointement } from '../models/appointement';

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


  upadateClassroom(id:number,Classroom:Classroom):Observable<Classroom[]>
  {
    return this.http.put<Classroom[]>(this.classroomURL+'/update_Classroom',Classroom)
  }


  getClassroombyId(id:number):Observable<Classroom>{
    return this.http.get<Classroom>(this.classroomURL+'/getClassroom/'+ id)
  }




  deleteClassroom(id : number){
    //return this.http.delete<Classroom[]>(this.classroomURL+'/deleteClassroom'+id)
    return this.http.delete(`${this.classroomURL}/deleteClassroom/${id}`)
  }


  //------------------------Service----------------------------------
  // ----------------------- Appointement----------------------------
//------------------------------------------------------------------


getAllAppointement():Observable<Appointement[]>{
  return this.http.get<Appointement[]>(this.classroomURL+'/all_Appointement')
}

addAppointement(Appointement:any):Observable<any[]>{
  return this.http.post<any[]>(this.classroomURL+'/add_Appointement',Appointement)
}



upadateAppointement(id:number,Appointement:Appointement):Observable<Appointement[]>
{
  return this.http.put<Appointement[]>(this.classroomURL+'/update_Appointement',Appointement)
}


/* -----------------Ziidha dealete ----------- */



}
