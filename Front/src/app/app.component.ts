import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  token = localStorage.getItem("token");
  title = 'ProjetPi';

  constructor(private router: Router) {}

  ngOnInit(): void { // Supposons que le token est stocké dans le local storage

  }


    //this.router.navigate(['/new-page']);
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
  this.user=""
  this.token=""
}

/*********************************** */


}
