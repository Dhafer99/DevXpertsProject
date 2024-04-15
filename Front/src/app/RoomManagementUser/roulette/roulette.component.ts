import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import {
  Item,
  NgxWheelComponent,
  TextAlignment,
  TextOrientation,
} from 'ngx-wheel';
import { Pack } from 'projects/back-office/src/app/models/pack';
import { Room } from 'projects/back-office/src/app/models/room';
import { PackServiceService } from 'projects/back-office/src/app/services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/services/room-service.service';
import { WebSocketService } from 'src/app/web-socket.service';

import Swal from 'sweetalert2';
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
    private ngZone: NgZone,
    private webSocketService: WebSocketService,
   // private socket: Socket
   
  ) {}
  rouletteResult: number | undefined;
  idToLandOn: any;

  items: Item[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;
  room: Room = new Room();
  pack!: any[];
  id = 0;
  packNames: Pack[] = [];
  seed: any[] = [];
  isSpinning: boolean = false;

  ngOnInit(): void {

    this.getPack();
 /*   this.socket.on('connect', () => {
      console.log('Connected to WebSocket server eyaaaaaaaa');
    });
    this.socket.on('rouletteResult', (result: number) => {
      this.wheel.idToLandOn = result;
      this.wheel.spin(); // Trigger spin animation
    });*/
   /* this.webSocketService.getRouletteResult().subscribe(
      result => {
        this.rouletteResult = result;
        // Traitez le résultat de la roulette ici, par exemple, affichez-le dans la console
        console.log('Résultat de la roulette :', this.rouletteResult);
      },
      error => {
        console.error('Erreur lors de la réception du résultat de la roulette :', error);
      }
    );*/

   /* this.socket.on('connect', () => {
      console.log('Connected to WebSocket server eyaa');
    });
    this.socket.on('rouletteResult', (result: number) => {
      this.wheel.idToLandOn = result;
      this.wheel.spin(); // Trigger spin animation
    });
   */
  }
  spinRoulette() {
    this.webSocketService.startRoulette();
  }
  getPack() {
    console.log("eeeeeeeeeeeeeee")
    this.id = this.activate.snapshot.params['id'];
    this.roomService.getRoomPackages(this.id).subscribe(
      (data: any) => {
        console.log(data)
        this.packNames = data;
        this.seed = this.packNames.map((pack) => pack.idPack);

        this.idToLandOn =
          this.seed[Math.floor(Math.random() * this.seed.length)];

        const colors = ['#B31312','#141A3D', '#545D91','#00353F'];

        this.items = this.seed.map((value) => ({
          fillStyle: colors[value % 3],
          text: `Pack ${value}`,
          id: value,
          textFillStyle: 'white',
          textFontSize: '16',
        }));
        this.wheel.items = this.items;
        this.wheel.reset();
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des noms de pack :',
          error
        );
      }
    );
  }

  reset() {
    this.wheel.reset();
  }
  before() {
    alert('Your wheel is about to spin');
  }
  stoppedAt: number = -1;
  
  async spin(prize: number) {

    this.reset();
    //this.socket.emit('startRoulette', this.id);
    this.wheel.spin();
    console.log(this.wheel.idToLandOn);
    this.roomService
    .ReservePack(this.wheel.idToLandOn,this.id)
    .subscribe(() => {});
  }
 

  after() {
    console.log("La roulette s'est arrêtée sur la position:",this.wheel.idToLandOn);

    // Vous pouvez également utiliser la position pour accéder à l'élément correspondant
    const landedItem = this.items.find((item) => item.id === this.stoppedAt);
    if (landedItem) {
      console.log(
        "L'élément sur lequel la roulette s'est arrêtée est:",
        landedItem
      );
    }

    this.getPack();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "campany x with id win pack "+this.wheel.idToLandOn,
      showConfirmButton: false,
      timer: 2500,
    });
   
  }
}
