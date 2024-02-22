import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  constructor(private Classroomadd :ClassroomService, /*private router:Route*/  private router: Router, private acr: ActivatedRoute){  }
  classroomForm !:FormGroup;
  ngOnInit(): void {
    //this.id=this.acr.snapshot.params['id']
    this.classroomForm=new FormGroup({
      block:new FormControl('',Validators.required),
      level:new FormControl('',Validators.required),
      classRoomNumber:new FormControl('',Validators.required),
      id:new FormControl(),
    })
      this.acr.params.subscribe(params=>{
        this.fetchClassroom(params['id'])
        

      })
  
  }
    add(){
      this.Classroomadd.addClassroom(this.classroomForm.value).subscribe (()=>{
        console.log( "classroom added")
        console.log("classroom"+JSON.stringify(this.classroomForm.value))})
        this.goToClassroomList();
      }

      fetchClassroom(id : number){
            this.Classroomadd.getClassroombyId(id).subscribe((data)=>{
            this.classroomForm.setValue({
            block : data.block,
            level: data.level,
            classRoomNumber : data.classRoomNumber,
            id : data.id


          })

        })


      }


      goToClassroomList(){
        this.router.navigate(['/classrooms']);
      }
    }


