import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { Room } from 'projects/back-office/src/app/Models/Room';
import { PackServiceService } from 'projects/back-office/src/app/Services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/Services/room-service.service';

@Component({
  selector: 'app-auction-room',
  templateUrl: './auction-room.component.html',
  styleUrls: ['./auction-room.component.css']
})
export class AuctionRoomComponent   {
  constructor( private activate: ActivatedRoute,private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}
room: Room = new Room();
id = 0;
isAuctionEnded: boolean = false;
timeLeft: string = '';
calculateTimeLeft(): void {
  // Calculez le temps restant, en prenant en compte la date de début et la durée
  const now = moment();
  const endTime = moment(this.room.dateDebut).add(this.room.duration, 'minutes');
  const duration = moment.duration(endTime.diff(now));

  // Vérifiez si le temps restant est négatif
  if (duration.asSeconds() < 0) {
    this.timeLeft = ' 00:00:00';
    this.isAuctionEnded = true;
    this.showModal();
  } else {
    this.timeLeft = ` ${duration.hours()}:${duration.minutes()}:${duration.seconds()}`;
  }
}

showModal(): void {
  // Affichez le modal en utilisant JavaScript pur
  const modalElement = document.getElementById('exampleModalCenterr');
  if (modalElement) {
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
  }
}
ngOnInit() {
  this.calculateTimeLeft();
  setInterval(() => {
    this.calculateTimeLeft();
  }, 1000); 




  this.id = this.activate.snapshot.params['id'];  
  this.roomService.getRoomById(this.id).subscribe(
    (r) => {
      this.room = r;
    },
    (error) => {
      console.error(
        "Erreur lors de la récupération du room :",
        error
      );
    }
  );


}


updatePrice(tokenAmount: number): void {
 
  this.roomService.UpdatePriceAuction(tokenAmount,this.id).subscribe((priceUpdate: any) => {
    this.room.priceAuction = priceUpdate;
  });
}
}
