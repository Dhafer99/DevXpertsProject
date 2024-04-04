import { Component, OnInit } from '@angular/core';
import { ServicebackService } from './services/serviceback.service';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{


  
  public notifications = 0;
  message !: string ;
  constructor(private serviceback: ServicebackService) {
   /*  this.webSocketService.connect().subscribe(() => {
      // Abonnez-vous aux notifications de paiement
      
    }); */
  }
  ngOnInit(): void {
    

    $(document).on("click", "notificationReadJava", function() {
      alert("Test");
    }); 

    this.serviceback.getNotificationCount(2).subscribe((data:number)=>{
      this.notifications= data ;
      console.log("NOTIFICATIONSSSSss")
      console.log(data);
    })
   
    
      
  
   }
  marknotificationAsread(){

    console.log("notification bell clicked")
    console.log("notification bell clicked")
    console.log("notification bell clicked")
    console.log("notification bell clicked")
    this.serviceback.markAsread(2).subscribe((data:any)=>{
      console.log(data);
    });
    this.serviceback.getNotificationCount(2).subscribe();

  }
  

    // Connectez-vous au WebSocket
   
   
  



}




   
    

  

