import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public notifications = 0;
  message !: string ;
  constructor() {
   /*  this.webSocketService.connect().subscribe(() => {
      // Abonnez-vous aux notifications de paiement
      
    }); */
  }
  ngOnInit(): void {
   
   
      this.testSocket();
      
  
   }
  testSocket(){

   /*  this.webSocketService.subscribeToPaymentNotifications().subscribe(notification => {
      // Gérez la notification ici (affichez une alerte, mettez à jour une liste, etc.)
      this.message=notification.body ;
      this.webSocketService.setMessage(notification.body)
      console.log('Nouvelle notification de paiement:', notification.body);
    }); */
  }
  
 
    // Connectez-vous au WebSocket
   
   
  



}




   
    

  

