import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  constructor( 
  
   private userserv : UserService,  private router: Router
   
  ) {}
  title = 'ProjetPi';
  idRoom : number = 0 
  idCompany : number = parseInt(localStorage.getItem("userID"));
 

  redirect() {
    // Ajoutez ici la logique que vous souhaitez exécuter lorsque le bouton est cliqué
    this.userserv.getRoomId(parseInt(localStorage.getItem("userID"))).subscribe(res => {
      console.log( this.idRoom+"ff"+ this.idCompany)
      this.idRoom = res;

      this.router.navigate(['/myRooms', this.idRoom, this.idCompany]);

    });
  }

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

/*********************************** */


}
