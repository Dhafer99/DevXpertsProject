import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'projects/back-office/src/app/models/User';
import { Room } from 'projects/back-office/src/app/models/room';
import { PackServiceService } from 'projects/back-office/src/app/services/pack-service.service';

import { RoomServiceService } from 'projects/back-office/src/app/services/room-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
  rooms: Room[] = [];
  test: boolean = false;
  @ViewChild('exampleModalCenter') modal!: ElementRef;
  constructor(
    private sanitizer: DomSanitizer,
    private packService: PackServiceService,
    private userserv: UserService,

    private route: Router,
    private roomService: RoomServiceService
  ) {}
  sanitizeHtml(html: string): SafeHtml {
    // Utiliser DomSanitizer pour marquer le HTML comme sûr
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  idRoom: number = 0;
  testExistantRoom: boolean = true;
  user: User;
  room!: Room;
  testAvailablePlaces: boolean = true;
  testingPointsNumber: boolean = true;
  ngOnInit() {
    this.userserv
      .getUserById(parseInt(localStorage.getItem('userID')))
      .subscribe((res) => {
        this.user = res;
      });
    this.roomService.getAllRooms().subscribe((res) => {
      this.rooms = res;
    });

   
  }

  sendcodeRoom(id: string) {
    this.packService.SendCodeRoom(this.user.email.toString(), id).subscribe(
      (r) => {},
      (error) => {
        console.error('Erreur lors de la récupération du room :', error);
      }
    );
  }

 
  Participate(id: number) {
    this.testExistantRoom = true;
    this.testingPointsNumber = true ; 
    this.testAvailablePlaces=true ; 
    this.roomService.getRoomById(id).subscribe(
      (r) => {
        
        this.userserv
          .getRoomId(parseInt(localStorage.getItem('userID')))
          .subscribe((res) => {
            this.idRoom = res;
            
            if (res === r.idRoom) {
              this.testExistantRoom = false;
            }
          });
        this.room = r;

        if(r.maxParticipants == r.confirmedParticipant)
        {
          this.testAvailablePlaces=false
        }
        this.test = true;
        if(this.user.points < this.room.price)
        {
          this.testingPointsNumber = false ; 
        }
       
      },
      (error) => {
        console.error('Erreur lors de la récupération du room :', error);
      }
    );
  }
  navigateToPayments(id: number) {
   

    this.route.navigate(['/payments', id]);
    this.modal.nativeElement.dismiss();
  }

  userMyPoints(id: number) {
   
    this.userserv.affecterRoomTouser(id,this.user.id, 0).subscribe((r)=>{});
    this.roomService.updateRoomParticipant(id).subscribe(r=>{});
    
   // this.modal.nativeElement.dismiss();
  }

}
