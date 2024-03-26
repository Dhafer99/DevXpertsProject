import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { Router } from '@angular/router';
import { Test } from '../../models/quiz';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  constructor(private classRoomS:ClassroomService, private router:Router){}

  ngOnInit(): void {
   
    this.getalltests();
    
      }
      public tests!:Test[];
      public getalltests(): void{
        this.classRoomS.getTests().subscribe(
          (response:Test[])=>{
            this.tests=response;
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
          }
        );
      }
    
      active(id:number){
          this.classRoomS.activateanactivate(id).subscribe(() => {
          // just refresh
          this.getalltests();
        });

}
}
