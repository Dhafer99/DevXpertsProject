import { Component, OnInit } from '@angular/core';
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

  constructor(private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(res => {
      this.rooms = res;
    });
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
}