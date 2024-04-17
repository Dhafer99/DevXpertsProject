import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom';

@Component({
  selector: 'app-afficher-classroom',
  templateUrl: './afficher-classroom.component.html',
  styleUrls: ['./afficher-classroom.component.css']
})
export class AfficherClassroomComponent implements OnInit{
constructor(private classRoomS:ClassroomService){}
 
// tableau 
classroomList : Classroom[]=[];
ngOnInit(): void {
  this.classRoomS.getAllClassrooms().subscribe((data:Classroom[])=>{
    this.classroomList=data; 
    console.log(data);
  })
}


}
