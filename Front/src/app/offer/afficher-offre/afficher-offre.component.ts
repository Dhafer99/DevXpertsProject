import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})



export class AfficherOffreComponent implements OnInit{

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