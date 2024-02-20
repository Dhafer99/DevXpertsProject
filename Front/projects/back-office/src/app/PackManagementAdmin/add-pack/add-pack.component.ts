import { Component } from '@angular/core';
import { Pack } from '../../Models/Pack';
import { PackServiceService } from '../../Services/pack-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Room } from '../../Models/Room';
import { RoomServiceService } from '../../Services/room-service.service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent {
  constructor(private packService: PackServiceService , private route:Router ) {}

  pack: Pack = new Pack();
 
  addPack(): void {
   
    if (
      
      !this.pack.description ||
      !this.pack.price ||
      !this.pack.quantity
     
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Need To Fill all the inputs !",
      });
      return;
    }

  
    this.packService.addPack(this.pack).subscribe(
      () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Pack Created Successfully ",
          showConfirmButton: false,
          timer: 1500,
        });
        this.route.navigate(["/viewPack"]);
      },
      (error) => {
        console.error("Erreur lors de l'ajout", error);
      }
    );
  }
}



