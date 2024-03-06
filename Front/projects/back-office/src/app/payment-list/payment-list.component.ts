import { Component, OnInit } from '@angular/core';
import { PackServiceService } from '../Services/pack-service.service';
import { Router } from '@angular/router';
import { RoomServiceService } from '../Services/room-service.service';
import { Payment } from '../Models/Payment';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}
  ngOnInit(): void {
    this.packService.getPayments().subscribe(res => {
      console.log(res)
      this.payments = res;
    });
  }

}
