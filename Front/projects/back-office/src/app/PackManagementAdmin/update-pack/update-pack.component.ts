import { Component, OnInit } from '@angular/core';
import { PackServiceService } from '../../Services/pack-service.service';
import { ActivatedRoute } from '@angular/router';
import { Pack } from '../../Models/Pack';

@Component({
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.css']
})
export class UpdatePackComponent implements OnInit{
  constructor(private packService: PackServiceService, private activate:ActivatedRoute) {}
  packs!: Pack;
  id=0;
  
  ngOnInit(): void {
    this.id=this.activate.snapshot.params['id']
    this.packService.getDetailsPackById(this.id).subscribe(
      (packs) => {
        this.packs = packs;
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération du pack :",
          error
        );
      }
    );
  }
  

}
