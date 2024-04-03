import { Component, OnInit } from '@angular/core';
import { PackServiceService } from '../../Services/pack-service.service';
import { Router } from '@angular/router';
import { Pack } from '../../Models/Pack';
import { RoomServiceService } from '../../Services/room-service.service';

@Component({
  selector: 'app-historique-packs',
  templateUrl: './historique-packs.component.html',
  styleUrls: ['./historique-packs.component.css']
})
export class HistoriquePacksComponent implements OnInit {
  packs: Pack[] = [];

  constructor(private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}

  ngOnInit() {
    this.packService.findByTypePack('diamond').subscribe(res => {
      this.packs = res;
    });
  }
  getpackByType(type:string): void {

    this.packService.findByTypePack(type).subscribe(res => {
      this.packs = res;
    });
  }

}
