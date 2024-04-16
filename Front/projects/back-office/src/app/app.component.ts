import { Component } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<ejs-schedule> </ejs-schedule>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {













  
  title = 'backOffice';
  constructor(private router: Router){  }
  goToClassroomList(){
    this.router.navigate(['/classrooms']);
  }
  goTocalendar(){
    this.router.navigate(['/calander2']);
  }
  goToChatbot(){
    this.router.navigate(['/chatBot']);

  }
  AddClassroom(){
    this.router.navigate(['/addclassroom']);

  }
}
