import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Room } from 'projects/back-office/src/app/Models/Room';
import { PackServiceService } from 'projects/back-office/src/app/Services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/Services/room-service.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{
  rooms: Room[] = [];
  test:boolean=false;

  constructor( private sanitizer: DomSanitizer,
    private packService: PackServiceService,
     private route: Router,private roomService: RoomServiceService) {}
  sanitizeHtml(html: string): SafeHtml {
    // Utiliser DomSanitizer pour marquer le HTML comme sûr
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  ngOnInit() {
    this.roomService.getAllRooms().subscribe(res => {
      this.rooms = res;
    });
  }


  sendcodeRoom(id:string){
    this.packService.SendCodeRoom("eya.somai@esprit.tn",id).subscribe(
      (r) => {
       
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération du room :",
          error
        );
      }
    );
  }


      room!: Room ;
 Participate(id:number){
    this.roomService.getRoomById(id).subscribe(
      (r) => {
        this.room = r;
        this.test=true
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération du room :",
          error
        );
      }
    );
  }
  navigateToPayments() {
    // Assuming you have a route named 'payments' defined in your routing configuration
    this.route.navigate(['/payments']);
  }
}