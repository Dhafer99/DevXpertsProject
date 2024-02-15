import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  constructor(private Classroomadd :ClassroomService, /*private router:Route*/){  }
  classroomForm !:FormGroup;
  ngOnInit(): void {
    //this.id=this.acr.snapshot.params['id']
    this.classroomForm=new FormGroup({
      block:new FormControl('',Validators.required),
      level:new FormControl('',Validators.required),
      classRoomNumber:new FormControl('',Validators.required),
      
    }) }
    add(){
      this.Classroomadd.addClassroom(this.classroomForm.value).subscribe (()=>{
        console.log( "classroom added")
        console.log("classroom"+JSON.stringify(this.classroomForm.value))})
      }
    }


