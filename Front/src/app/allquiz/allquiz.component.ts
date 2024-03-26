import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'projects/back-office/src/app/models/quiz';
import { ClassroomService } from 'projects/back-office/src/app/services/classroom.service';

@Component({
  selector: 'app-allquiz',
  templateUrl: './allquiz.component.html',
  styleUrls: ['./allquiz.component.css']
})
export class ALLquizComponent implements OnInit{
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
