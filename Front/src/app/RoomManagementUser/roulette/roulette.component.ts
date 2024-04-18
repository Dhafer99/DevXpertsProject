import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone,
  Input,
  AfterViewInit,
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
import { WebSocketService } from 'src/app/services/websocketservice';
import { setInterval } from 'stompjs';

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
    private webSocketService: WebSocketService // private socket: Socket
  ) {}

  rouletteResult: number | undefined;
  idToLandOn: any;
  resultWinner: number[] = [];
  items: Item[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;
  room: Room = new Room();
  pack!: any[];
  id = 0;
  packNames: Pack[] = [];
  seed: any[] = [];
  isSpinning: boolean = false;
  spinNumber = 0;
  role: any;
  testSocket() {
    console.log('RESULTS FROM BACK');
    // console.log(this.webSocketService.getResults(this.id));
  }
  number = 0;
  varInterval: any;
  valuee: any;
  ngOnInit(): void {
    this.getPack();

    this.role = localStorage.getItem('role');
    //this.idToLandOn =this.seed[Math.floor(Math.random() * this.seed.length)];
    if (this.role == 'admin') {
      this.roomService.getRoomPackages(this.id).subscribe(
        (data: any) => {
          console.log(data);
          this.packNames = data;
          this.seed = this.packNames.map((pack) => pack.idPack);

          this.idToLandOn =
            this.seed[Math.floor(Math.random() * this.seed.length)];
          this.webSocketService
            .saveRandomNumber(this.id, this.idToLandOn)
            .subscribe(() => {});
          console.log('test anas');
          console.log(this.number);
          //  this.getPack();
        },
        (error) => {
          console.error(
            'Erreur lors de la récupération des noms de pack :',
            error
          );
        }
      );
    } else {
      this.webSocketService.getDataPolling(4000).subscribe((res) => {
        console.log(res.randomValue, 'khraa');
        this.idToLandOn = res.randomValue;
      });
      // Appel toutes les 1000 millisecondes (1 seconde
    }

    this.id = this.activate.snapshot.params['id'];

    // this.idToLandOn= 1
    // this.webSocketService.getDataPolling(2000,this.id).subscribe(data => {

    // });
    /*  this.webSocketService.saveRandomNumber(this.id).subscribe(()=>{})
    this.webSocketService.GetRandomIndex().subscribe((res)=>{
      console.log("eeeeeeeeeeeeeee")
      console.log(res)
      this.idToLandOn = res ;
    }) */
    /*  this.idToLandOn= data;
     console.log(data)
    });*/

    //this.webSocketService.connectToRouletteSocket(this.id);
    /* this.webSocketService.getListObservable().subscribe((list) => {
      console.log('Test Observable Object TAB ');
      console.log(list);
    });*/

    /* this.webSocketService.getMessageSubject().subscribe((messageObject) => {
      const parsedMessage = {
        result: messageObject.result,
        spin: messageObject.spin,
      };
      //this.idToLandOn = messageObject.result;
      console.log('teest eya ');
      console.log(this.idToLandOn);

      this.resultWinner.push(this.idToLandOn);
      console.log('TAAB eya ');

      console.log(this.resultWinner);
      // if(parsedMessage)
      //this.wheel.spin();

      // if (parsedMessage.spin === true) {
      // Spin the wheel when spin is true
      //  this.wheel.spin();

      //  }
    });
*/
    // this.webSocketService.getResults(this.id);
    this.webSocketService.connectToStartRouletteSocket();

    this.webSocketService
      .getStartRouletteSubject()
      .subscribe((messageObject) => {
        console.log('MESSAGE OBJECT');
        console.log(messageObject);
        //this.idToLandOn = this.wheel.spin();

        // if(parsedMessage)
        this.wheel.spin();

        // if (parsedMessage.spin === true) {
        // Spin the wheel when spin is true
        //  this.wheel.spin();

        //  }
      });

    console.log(this.id);

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

  getPack() {
    console.log('eeeeeeeeeeeeeee');
    this.id = this.activate.snapshot.params['id'];
    this.roomService.getRoomPackages(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.packNames = data;
        this.seed = this.packNames.map((pack) => pack.idPack);

        /* this.idToLandOn =
        this.seed[Math.floor(Math.random() * this.seed.length)];
         */
        console.log('ID TO LAND ON');
        console.log(this.idToLandOn);

        const colors = ['#B31312', '#141A3D', '#545D91', '#00353F'];

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
    // this.idToLandOn =
    //this.seed[Math.floor(Math.random() * this.seed.length)];
  }
  before() {
   // this.getPack();
    this.webSocketService.GetRandomIndex().subscribe((res) => {
      console.log(res.randomValue, 'khraa');
      this.valuee = res.randomValue;
    });
    // alert('Your wheel is about to spin');
    console.log('before');
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    console.log('AJAJAJAJJA', this.idToLandOn);
  }
  stoppedAt: number = -1;

  async spin(prize: number) {
    this.spinNumber = this.spinNumber + 1;

    // this.resultWinner.splice(0, this.resultWinner.length);
    this.reset();
    this.roomService.getRoomPackages(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.packNames = data;
        this.seed = this.packNames.map((pack) => pack.idPack);

        this.idToLandOn =
          this.seed[Math.floor(Math.random() * this.seed.length)];
        this.webSocketService
          .saveRandomNumber(this.id, this.idToLandOn)
          .subscribe(() => {});
        console.log('test anas');
        console.log(this.number);
        // this.getPack();

        //this.getPack();
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des noms de pack :',
          error
        );
      }
    );
    //   this.webSocketService.getResults(this.id);
    this.webSocketService.startRoulette();

    //
    //this.socket.emit('startRoulette', this.id);

    this.wheel.spin();

    // if (parsedMessage.spin === true) {
    // Spin the wheel when spin is true
    //  this.wheel.spin();

    //  }
  }

  after() {
    console.log('spin number is : ' + this.spinNumber);
    console.log(
      "La roulette s'est arrêtée sur la position:",
      this.wheel.idToLandOn
    );
  

    // Vous pouvez également utiliser la position pour accéder à l'élément correspondant
    const landedItem = this.items.find((item) => item.id === this.stoppedAt);
    if (landedItem) {
      console.log(
        "L'élément sur lequel la roulette s'est arrêtée est:",
        landedItem
      );
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'campany x with id win pack ' + this.valuee,
      showConfirmButton: false,
      timer: 2500,
    }).then((result) => {
      if (this.role !== 'admin') {
        this.roomService
          .ReservePack(this.wheel.idToLandOn, this.id)
          .subscribe(() => {
           
            //location.reload();
          });
          this.getPack();
      } else {
        this.getPack();
      }

      //  this.getPack()
    });

    this.ngOnInit();
  }
}
