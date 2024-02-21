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

  constructor(private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(res => {
      this.rooms = res;
    });
  }
}