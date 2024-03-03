import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { Payment } from 'projects/back-office/src/app/Models/Payment';
import { environment } from 'projects/back-office/src/app/Models/stripe';
import { PackServiceService } from 'projects/back-office/src/app/Services/pack-service.service';
import { RoomServiceService } from 'projects/back-office/src/app/Services/room-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  constructor( private http: HttpClient,private activate: ActivatedRoute,private packService: PackServiceService, private route: Router,private roomService: RoomServiceService) {}
    payment: Payment = new Payment();
   points50 : number = 0;
   points100: number = 0;
    points150: number = 0;
   totalAmount: number = 0;
   totalPoints: number = 0;
  calculateTotalAmount() {
    this.totalAmount = (this.points50 * 30) + (this.points100 * 50) + (this.points150 * 100);
    this.totalPoints = (this.points50 * 50) + (this.points100 * 100) + (this.points150 * 150);

  }
  incrementPoints(type: string) {
    if (type === '50') {
      this.points50++;
    } else if (type === '100') {
      this.points100++;
    } else if (type === '150') {
      this.points150++;
    }
    this.calculateTotalAmount();
  }

  stripePromise = loadStripe(environment.stripe);
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async pay(): Promise<void> {
   this.payment.amount===this.totalAmount;
   this.payment.quantity===this.totalPoints;

    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: this.totalAmount,
      quantity: this.totalPoints,
     // cancelUrl: 'http://localhost:4200/cancel',
     // successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe!.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }

}
