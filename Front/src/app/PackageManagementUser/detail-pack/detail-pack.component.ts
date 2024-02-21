import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pack } from 'projects/back-office/src/app/Models/Pack';
import { PackServiceService } from 'projects/back-office/src/app/Services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/Services/room-service.service';

@Component({
  selector: 'app-detail-pack',
  templateUrl: './detail-pack.component.html',
  styleUrls: ['./detail-pack.component.css']
})
export class DetailPackComponent implements OnInit {
  packs: Pack[] = [];
  id = 0;
  constructor(private activate: ActivatedRoute,private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}

  
  ngOnInit() {
    this.id = this.activate.snapshot.params['typePack'];  
    if(this.id==2){
      this.packService.findByTypePack('standard').subscribe(res => {
        this.packs = res;
      });
    }
    
    if(this.id==0){
      this.packService.findByTypePack('diamond').subscribe(res => {
        this.packs = res;
      });
    }
    if(this.id==1){
      this.packService.findByTypePack('silver').subscribe(res => {
        this.packs = res;
      });
    }
  }

}
