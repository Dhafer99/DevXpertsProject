import { Component } from '@angular/core';

@Component({
  selector: 'app-view-pack',
  templateUrl: './view-pack.component.html',
  styleUrls: ['./view-pack.component.css']
})
export class ViewPackComponent {
  packs: any[] = [
    {id: 1, name: "Residence 1", type: "diamond", price:500, feature :"rrrr", description:"&&&&"},
    {id: 2, name: "Residence 2", type: "gold" , price:500, feature :"rrrr", description:"&&&&"},
    {id: 3, name: "Residence 3", type: "silver", price:500, feature :"rrrr", description:"&&&&"}
  ];

  constructor() { }

  ngOnInit() {
    this.loadPacks();
  }
  flipCard(event: MouseEvent) {
    const target = event.currentTarget as HTMLDivElement;
    target.classList.add('flipped');
  }

  resetCard(event: MouseEvent) {
    const target = event.currentTarget as HTMLDivElement;
    target.classList.remove('flipped');
  }
  getPackStyle(packType: string) {
    // Fonction pour déterminer la classe CSS en fonction du type de pack
    switch (packType) {
      case 'diamond':
        return 'diamond';
      case 'gold':
        return 'gold';
      case 'silver':
        return 'silver';
      default:
        return '';
    }
  }
  loadPacks() {
 
        console.error('Erreur lors du chargement des packs');
      }
    
  }

