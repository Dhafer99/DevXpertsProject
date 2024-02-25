import { Component, OnInit } from '@angular/core';
import { Offer, typeOffer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})



export class AfficherOffreComponent implements OnInit{

  constructor(private offerService:OfferService){  }
  
  exibitorId!:number;
  listOffers:Offer[]=[]
  listStages:Offer[]=[]
  listJobs:Offer[]=[]
  role!:string;
  
  ngOnInit(): void {
    this.role="exibitor"
    this.getOffers();
    this.getOffersTypeJob();
    this.getOffersTypeStage();
  }

  getOffers(){
    this.exibitorId=1;
    this.offerService.getAllOffersByExibitor(this.exibitorId).subscribe(data=>{
    this.listOffers=data
    }) 
  }

  getOffersTypeStage(){
    this.exibitorId=1;
    this.offerService.getOffersByTypeOffer("stage",this.exibitorId).subscribe(data=>{
    this.listStages=data
    })
  }

  getOffersTypeJob(){
    this.exibitorId=1;
    this.offerService.getOffersByTypeOffer("job",this.exibitorId).subscribe(data=>{
    this.listJobs=data
    })
  }

  detail(){
    alert('Your details are displayed'+this.listOffers[0]['file']) //
  }
}