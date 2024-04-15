import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { User } from './models/user';
>>>>>>> main

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  navigateEvents(){
    this.router.navigate(['/list']);
  }
  title = 'ProjetPi';
  //user!:User;
  user=JSON.parse(localStorage.getItem("user"));
  
/******************** **********************/
dark(){
  const body = document.querySelector('body');
  if (body) {
    body.setAttribute('data-bs-theme',"dark");
  }
}
light(){
  const body = document.querySelector('body');
  if (body) {
    body.setAttribute('data-bs-theme',"light");
  }

}

disconnect(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
}

/*********************************** */


}
