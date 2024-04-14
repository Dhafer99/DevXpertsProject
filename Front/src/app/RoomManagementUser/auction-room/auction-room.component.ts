import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { Enchere } from 'projects/back-office/src/app/models/Enchere';

import { Room } from 'projects/back-office/src/app/models/room';
import { PackServiceService } from 'projects/back-office/src/app/services/pack-service.service';

import { RoomServiceService } from 'projects/back-office/src/app/services/room-service.service';

@Component({
  selector: 'app-auction-room',
  templateUrl: './auction-room.component.html',
  styleUrls: ['./auction-room.component.css'],
})
export class AuctionRoomComponent {
  constructor(
    private activate: ActivatedRoute,
    private packService: PackServiceService,
    private route: Router,
    private roomService: RoomServiceService
  ) {}
  room: Room = new Room();

  id = 0;
  isAuctionEnded: boolean = false;
  isAuctionEndedWinners: boolean = false;
  isAuctionEndedLosers: boolean = false;

  isUserWinner: boolean = false;

  timeLeft: string = '';
  calculateTimeLeft(): void {
    const now = moment();
    const endTime = moment(this.room.dateDebut).add(
      this.room.duration,
      'minutes'
    );
    const duration = moment.duration(endTime.diff(now));

    if (duration.asSeconds() < 0) {
      this.timeLeft = ' 00:00:00';
      this.roomService
        .getTopEncheresByRoomId(this.room.idRoom)
        .subscribe((response) => {
          response.forEach((element: Enchere) => {
            const companyIdToCheck = parseInt(localStorage.getItem("userID"));
            const isCompanyIdPresent = response.some((element: Enchere) => {
              return element.idcompany === companyIdToCheck;
            });

            if (isCompanyIdPresent) {
              this.isAuctionEndedWinners = true;
            } else {
              this.isAuctionEndedLosers = true;
            }
          });
        });

      this.isAuctionEnded = true;
      const modalElement = document.getElementById('exampleModalCenterr');
      if (modalElement) {
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
      }
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
        console.error('Erreur lors de la récupération du room :', error);
      }
    );
  }

  updatePrice(tokenAmount: number): void {
    this.roomService
      .updatePricingEnchere(1, this.room.idRoom, tokenAmount)
      .subscribe();
    this.roomService
      .UpdatePriceAuction(tokenAmount, this.id)
      .subscribe((priceUpdate: any) => {
        this.room.priceAuction = priceUpdate;
      });
  }
}
