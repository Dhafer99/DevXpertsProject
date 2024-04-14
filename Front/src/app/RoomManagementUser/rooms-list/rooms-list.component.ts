import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Room } from 'projects/back-office/src/app/models/room';
import { PackServiceService } from 'projects/back-office/src/app/services/pack-service.service';

import { RoomServiceService } from 'projects/back-office/src/app/services/room-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{
  rooms: Room[] = [];
  test:boolean=false;
  @ViewChild('exampleModalCenter') modal!: ElementRef; 
  constructor( private sanitizer: DomSanitizer,
    private packService: PackServiceService,
   private userserv : UserService,
   
     private route: Router,private roomService: RoomServiceService) {}
  sanitizeHtml(html: string): SafeHtml {
    // Utiliser DomSanitizer pour marquer le HTML comme sûr
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  idRoom : number= 0 ; 
  testExistantRoom : boolean = true ; 
  ngOnInit() {
   
    this.roomService.getAllRooms().subscribe(res => {
      this.rooms = res;

    })

    

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
        this.testExistantRoom = true;
    this.roomService.getRoomById(id).subscribe(
      (r) => {
        console.log(r);
      this.userserv.getRoomId(parseInt(localStorage.getItem("userID"))).subscribe(res => {
        this.idRoom = res;
        console.log(res +"ff"+ r.idRoom )
        console.log(res === r.idRoom);
        if (res === r.idRoom) {
          this.testExistantRoom = false;
        }
      });
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
  navigateToPayments(id:number) {
    // Assuming you have a route named 'payments' defined in your routing configuration
   
    this.route.navigate(['/payments',id]);
    this.modal.nativeElement.dismiss();
  }
}