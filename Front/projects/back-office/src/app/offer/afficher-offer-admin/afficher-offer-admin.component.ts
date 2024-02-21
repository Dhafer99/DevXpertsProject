import { Component } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-afficher-offer-admin',
  templateUrl: './afficher-offer-admin.component.html',
  styleUrls: ['./afficher-offer-admin.component.css']
})
export class AfficherOfferAdminComponent {

  constructor(private offerService:OfferService){  }
  
  listOffers:Offer[]=[]
  
  ngOnInit(): void {
  this.offerService.getAllOffers().subscribe((data:Offer[])=>{
  this.listOffers=data
  console.log("mylist:"+JSON.stringify(this.listOffers))
    })
  }
  detail(){
    alert('Your details are displayed')
  }

}
