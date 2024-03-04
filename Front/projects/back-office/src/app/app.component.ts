import { Component, OnInit } from '@angular/core';
import { PackServiceService } from './Services/pack-service.service';
import { RoomServiceService } from './Services/room-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private webSocketService: RoomServiceService) {}
  title = 'backOffice';
  notifications: any[] = [];
 


  ngOnInit() {
    this.notifications.push("eee");
    this.webSocketService.getNotifications().subscribe((notification) => {
      this.notifications.push("notification");
      console.log(this.notifications)
      // Handle notification display or any other logic
    });
  }
  onPaymentConfirmed() {
    // Connectez-vous au WebSocket
    this.webSocketService.connect().subscribe(() => {
      // Abonnez-vous aux notifications de paiement
      this.webSocketService.subscribeToPaymentNotifications().subscribe(notification => {
        console.log("eee")
        // Gérez la notification ici (affichez une alerte, mettez à jour une liste, etc.)
        console.log('Nouvelle notification de paiement:', notification);
      });
    });
  }
}
  
  
 
