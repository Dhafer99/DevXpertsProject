import { Component, OnInit } from '@angular/core';
import { PackServiceService } from '../../Services/pack-service.service';
import { Room } from '../../Models/Room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServiceService } from '../../Services/room-service.service';
import { Pack } from '../../Models/Pack';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent  implements OnInit {
  room!: Room;
  pack!: Pack[];
  id = 0;
  constructor( private activate: ActivatedRoute,private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}

  ngOnInit() {
    this.id = this.activate.snapshot.params['id'];  
    this.packService.findPacksByIdRoom(this.id).subscribe(
      (r) => {
        this.pack = r;
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération du room :",
          error
        );
      }
    );

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


  updateRoom():void { 
    this.room.idRoom= this.id ; 
    this.room.packs = this.pack;
    this.roomService.UpdateRoom(this.room).subscribe(
   
      () => {
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "room Created Successfully ",
          showConfirmButton: false,
          timer: 1500,
        });
       
      },
      (error) => {
        console.error("Erreur lors de l'ajout", error);
      }
    );}
}
