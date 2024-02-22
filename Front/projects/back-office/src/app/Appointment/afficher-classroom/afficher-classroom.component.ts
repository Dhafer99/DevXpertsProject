import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-classroom',
  templateUrl: './afficher-classroom.component.html',
  styleUrls: ['./afficher-classroom.component.css']
})
export class AfficherClassroomComponent implements OnInit{
constructor(private classRoomS:ClassroomService, private router:Router){}
 
// tableau 
classroomList : Classroom[]=[];
ngOnInit(): void {
  this.classRoomS.getAllClassrooms().subscribe((data:Classroom[])=>{
    this.classroomList=data; 
    console.log(data);
  })
}

updateClassroom(id :Number){
this.router.navigate(['/addclassroom',id]);

}
deleateClassroom(id :number){
  this.classRoomS.deleteClassroom(id).subscribe(()  => this.classroomList = this.classroomList.filter((c: Classroom) => c.id !== id))
  
}

}
