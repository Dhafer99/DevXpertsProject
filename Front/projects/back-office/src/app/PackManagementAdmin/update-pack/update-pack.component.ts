import { Component, ElementRef, OnInit } from '@angular/core';
import { PackServiceService } from '../../Services/pack-service.service';
import { ActivatedRoute } from '@angular/router';
import { Pack } from '../../Models/Pack';
import Swal from 'sweetalert2';
import { Room } from '../../Models/Room';
import { RoomServiceService } from '../../Services/room-service.service';

@Component({
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.css']
})
export class UpdatePackComponent implements OnInit {
  constructor( private roomService :RoomServiceService, private elementRef: ElementRef,private packService: PackServiceService, private activate: ActivatedRoute) { this.container = null;}
  pack!: Pack;
  rooms!: Room;
  id = 0;
  private container: HTMLElement | null;
  signUp(): void {
    if (this.container) {
      this.container.classList.add('right-panel-active');
    }
  }

  onSignInClick(): void {
    if (this.container) {
      this.container.classList.remove('right-panel-active');
    }
  }
  ngOnInit(): void {
  
    this.container = this.elementRef.nativeElement.querySelector('#container');

    this.id = this.activate.snapshot.params['id'];  
  
    console.log('ID:', this.id);
    this.packService.getDetailsPackById(this.id).subscribe(
      (packs) => {
        this.pack = packs;
        console.log(this.pack.room.idRoom);
        this.roomService.getRoomById(this.pack.room.idRoom).subscribe(
          (roomse) => {
            this.rooms = roomse;
          },
          (error) => {
            console.error(
              "Erreur lors de la récupération du room :",
              error
            );
          }
        );
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération du pack :",
          error
        );
      }
    );
   
  };


  updatePack():void { 
    this.pack.idPack= this.id ; 
    //console.log(this.rooms);
    //console.log(this.pack.room);
   // this.pack.room = this.rooms;
   // console.log(this.pack);
    this.packService.UpdatePack(this.pack).subscribe(
   
      () => {
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Pack updated Successfully ",
          showConfirmButton: false,
          timer: 1500,
        });
       
      },
      (error) => {
        console.error("Erreur lors de modificatin du pack ", error);
      }
    );}

}
