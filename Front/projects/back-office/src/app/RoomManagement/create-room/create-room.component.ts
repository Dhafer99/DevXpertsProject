import { Component } from '@angular/core';
import { RoomServiceService } from '../../Services/room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  constructor(private roomService: RoomServiceService , private route:Router) {}
 

}
