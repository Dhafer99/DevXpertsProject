import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Enchere } from 'projects/back-office/src/app/Models/Enchere';
import { Room } from 'projects/back-office/src/app/Models/Room';
import { PackServiceService } from 'projects/back-office/src/app/Services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/Services/room-service.service';
import { Subscription, interval } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.component.html',
  styleUrls: ['./my-rooms.component.css']
})
export class MyRoomsComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer, private activate: ActivatedRoute,private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}
  room: Room = new Room();
  sanitizeHtml(html: string): SafeHtml {
    // Utiliser DomSanitizer pour marquer le HTML comme sûr
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  idRoom = 0;
  hours!: number;
  minutes!: number;
  seconds!: number;
  private countdownInterval!: Subscription;
  openAuction : Boolean = false
  enchere: Enchere = new Enchere();
  @ViewChild('exampleModalCenter') modal!: ElementRef; 
  sendButtonClick(codeInput: string) {
    if (codeInput === this.room.codeRoom) {
      this.roomService.getUserEnchere(1 ,this.room.idRoom).subscribe(
        (response: boolean) => {  
          if (response === false) {
          this.roomService.addEnchere(1 ,this.room.idRoom).subscribe(() => {
            this.modal.nativeElement.dismiss();
          
          });
            this.route.navigate(['/auction', this.idRoom]);
          
        }
        else 
        {
         
            this.route.navigate(['/auction', this.idRoom]);
        }
          console.log(response)})
   
        
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect code !'
      });
    }
  }
  updateCountdown() {
    const now = new Date();
  
    if (this.room.dateDebut instanceof Date || typeof this.room.dateDebut === 'string') {
      const dateDebutAsDate = typeof this.room.dateDebut === 'string'
        ? new Date(this.room.dateDebut)
        : this.room.dateDebut;
  
      if (dateDebutAsDate instanceof Date && !isNaN(dateDebutAsDate.getTime())) {
        const difference = dateDebutAsDate.getTime() - now.getTime();
  
        if (difference <= 0) {
          this.openAuction = true; 
                    this.countdownInterval.unsubscribe();
        } else {
          this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
        }
      } else {
        console.error("Invalid dateDebut:", this.room.dateDebut);
      }
    } else {
      console.error("Invalid dateDebut type:", this.room.dateDebut);
    }
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      this.countdownInterval.unsubscribe();
    }}
  ngOnInit() {
    const now = new Date();
    if (this.room.dateDebut instanceof Date || typeof this.room.dateDebut === 'string') {
      const dateDebutAsDate = typeof this.room.dateDebut === 'string'
        ? new Date(this.room.dateDebut)
        : this.room.dateDebut;
  
      if (dateDebutAsDate instanceof Date && !isNaN(dateDebutAsDate.getTime())) {
        const difference = dateDebutAsDate.getTime() - now.getTime();
  
        if (difference <= 0) {
          this.openAuction = true; 
                    this.countdownInterval.unsubscribe();}}}

    this.countdownInterval = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
    
    this.idRoom = this.activate.snapshot.params['idRoom'];  
  this.roomService.getRoomById(this.idRoom).subscribe(
    (r) => {
      console.log(this.room)
      this.room = r;
    },
    (error) => {
      console.error(
        "Erreur lors de la récupération du room :",
        error
      );
    }
  );}
}
