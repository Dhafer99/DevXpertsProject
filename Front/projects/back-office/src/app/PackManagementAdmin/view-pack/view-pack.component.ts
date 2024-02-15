import { Component, OnInit } from '@angular/core';
import { Pack } from '../../Models/Pack';
import { PackServiceService } from '../../Services/pack-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pack',
  templateUrl: './view-pack.component.html',
  styleUrls: ['./view-pack.component.css']
})
export class ViewPackComponent implements OnInit {
  packs: Pack[] = [];

  constructor(private packService: PackServiceService, private router: Router) {}

  ngOnInit() {
    this.packService.getAllPacks().subscribe(res => {
      this.packs = res;
    });
  }

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
