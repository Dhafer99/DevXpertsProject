import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectPi';
  constructor(private router: Router){  }

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

  goTocalender(){
    this.router.navigate(['/calender']);

  }

  /*********************************** */
}
