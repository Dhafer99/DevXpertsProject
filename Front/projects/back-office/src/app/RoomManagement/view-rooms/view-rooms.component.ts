import { Component } from '@angular/core';
import { Room } from '../../Models/Room';
import { PackServiceService } from '../../Services/pack-service.service';
import { Router } from '@angular/router';
import { RoomServiceService } from '../../Services/room-service.service';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent {
  rooms: Room[] = [];

  constructor(private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(res => {
      this.rooms = res;
    });
  }
}
