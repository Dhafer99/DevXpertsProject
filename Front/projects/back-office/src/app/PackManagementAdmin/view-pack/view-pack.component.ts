import { Component, OnInit } from '@angular/core';
import { Pack } from '../../Models/Pack';
import { PackServiceService } from '../../Services/pack-service.service';
import { Router } from '@angular/router';
import { RoomServiceService } from '../../Services/room-service.service';
import { Room } from '../../Models/Room';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-pack',
  templateUrl: './view-pack.component.html',
  styleUrls: ['./view-pack.component.css']
})
export class ViewPackComponent implements OnInit {
  packs: Pack[] = [];

  constructor(private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}
  editorConfig = {
    // CKEditor configuration options
    // Example: You can add a custom toolbar here
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat'] },
      { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
      { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
      { name: 'tools', items: ['Maximize'] }
    ]
  };
  ngOnInit() {
    this.packService.getAllPacks().subscribe(res => {
      this.packs = res;
    });
  }
  room: Room = new Room();
  addRooms():void { 
  this.roomService.addRoom(this.room).subscribe(
 
    () => {
     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "room Created Successfully ",
        showConfirmButton: false,
        timer: 1500,
      });
      this.route.navigate(["/viewPack"]);
    },
    (error) => {
      console.error("Erreur lors de l'ajout", error);
    }
  );}
  getPackStyle(packType: string) {
    // Fonction pour déterminer la classe CSS en fonction du type de pack
    switch (packType) {
      case 'diamond':
        return 'diamond';
      case 'silver':
        return 'silver';
      case 'standard':
        return 'standard';
      default:
        return '';
    }
  }
}
