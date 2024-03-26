import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom';
import { Appointement } from '../models/appointement';
import { Quiz, Test } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
 
  
 classroomURL = 'http://localhost:8095/api/AppointementAndClassrooms'
  constructor(private http:HttpClient) { }

  getAllClassrooms():Observable<Classroom[]>{
    return this.http.get<Classroom[]>(this.classroomURL+'/all_Classroom')
  }
  getFreeAppointements(clasroomid:number):Observable<any[]>{
    return this.http.get<any[]>(this.classroomURL+'/getFreeDatesPerClassroom/'+clasroomid)
  }



   addClassroom(Classroom:Classroom):Observable<Classroom[]>{
    console.log("sending")
    console.log(Classroom);
    return this.http.post<Classroom[]>(this.classroomURL+'/add_Classroom ',Classroom)
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

deleteAppointement(id:number)
{
   return this.http.delete<Appointement[]>(this.classroomURL+'/deleteAppointement/'+id)
}


/* -----------------Ziidha dealete ----------- */


showAvailability():Observable<Date[]>{
  return this.http.get<Date[]>(this.classroomURL+"/availableTime")
}

getMyAppoitement(iduser:number):Observable<Appointement[]>{
  return this.http.get<Appointement[]>(this.classroomURL+"/all_Appointement_foryouser/"+iduser)
}







/*
-------------------------------------Quiz
*/
public getTests():Observable<Test[]>{
  return this.http.get<any>(`${this.classroomURL}/retrieve-all-quizs`);
} 

public getatest(id: number):Observable<Test>{
  return this.http.get<Test>(`${this.classroomURL}/retrieve-quiz/${id}`);
} 

addQuiz(quiz: Quiz,img:string): Observable<void> {
  return this.http.post<void>(`${this.classroomURL}/add-quiz/${img}`, quiz);
}

 public activateanactivate(userId: number):Observable<void>{
  return this.http.put<void>(`${this.classroomURL}/activateanactivate/${userId}`, {});
}

public getaquestion(link: any):Observable<any>{
  return this.http.get<any>(`${link}`);
} 
 


public addQuizApi(quizs: any[]): Observable<void> {
  return this.http.post<void>(`${this.classroomURL}/add-quiz-api`, quizs);
}



/* public activateanactivate(userId: number):Observable<void>{
  return this.http.put<void>(${this.classroomURL}/activateanactivate/${userId}, {});
}

public getaquestion(link: any):Observable<any>{
  return this.http.get<any>(${link});
}  */



}
