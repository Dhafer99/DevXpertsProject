import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { Pack } from 'projects/back-office/src/app/Models/Pack';
import { Room } from 'projects/back-office/src/app/Models/Room';
import { PackServiceService } from 'projects/back-office/src/app/Services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/Services/room-service.service';
// Déclarez jQuery comme variable externe

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css'],
})
export class RouletteComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel!: NgxWheelComponent;
  constructor(
    private activate: ActivatedRoute,
    private packService: PackServiceService,
    private route: Router,
    private roomService: RoomServiceService,
    private ngZone: NgZone
  ) {}

  idToLandOn: any;

  items: Item[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;
  room: Room = new Room();
  pack!: any[];
  id = 0;
  packNames: Pack[] = [];
  seed: any[] = [];

  ngOnInit(): void {
    this.id = this.activate.snapshot.params['id'];

    this.roomService.getRoomPackages(this.id).subscribe(
      (data:any) => {
        this.packNames = data;
        console.log(this.seed);
        console.log('Pack Names:', this.packNames.length);

        this.seed = this.packNames.map((pack) => pack.idPack);

        this.idToLandOn =
          this.seed[Math.floor(Math.random() * this.packNames.length)];
        
        console.log('SEEEEEEEEEEEED AFTER PACKNAMES AFFECTION');
        console.log(this.seed);
     
        // Place your code here
        // This code will not trigger change detection

        // Use pack names to populate the items array
        /*  this.items = this.packNames.map((packName, index) => ({
          fillStyle: index % 2 === 0 ? '#FF0000' : '#000000',
          text: "packName",
          id: index,
          textFillStyle: 'white',
          textFontSize: '16'
        })); */
        console.log('Items:', this.items);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des noms de pack :',
          error
        );
      }
    );
   
  }
test(){
  console.log('Items:', this.items);
  const colors = ['#FF0000', '#000000'];
  console.log("TABLE LENGTH :"+this.packNames.length)
  const keystest = Array.from(Array(2).keys())
  this.items = keystest.map((value:any) => ({
    fillStyle: colors[value % 2],
    text: `Prize ${value}`,
    id: value,
    textFillStyle: 'white',
    textFontSize: '16',
  }));

}
  reset() {
    this.wheel.reset();
  }
  before() {
    alert('Your wheel is about to spin');
  }

  async spin(prize: number) {
    this.idToLandOn = prize;
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  after() {
    alert('You have been bamboozled');
  }
}
