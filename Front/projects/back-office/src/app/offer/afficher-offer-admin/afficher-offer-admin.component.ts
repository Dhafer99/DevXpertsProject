import { Component } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-afficher-offer-admin',
  templateUrl: './afficher-offer-admin.component.html',
  styleUrls: ['./afficher-offer-admin.component.css']
})
export class AfficherOfferAdminComponent {

  constructor(private offerService:OfferService,private candidatureService:CandidatureService){  }
  
  listOffers:Offer[]=[]
  nbrCandidature:number[]=[]
  newListOffers!:any
  currentDate!:Date;
  h!:boolean;

  
  ngOnInit(): void {
    this.currentDate = new Date();
  /*this.offerService.getAllOffers().subscribe((data:Offer[])=>{
  this.listOffers=data
  console.log("mylist:"+JSON.stringify(this.listOffers))
    })*/
  this.nbrCandidatureOnOffer()
  }
  nbrCandidatureOnOffer(){
      this.candidatureService.nbrApplicationOnOffer().subscribe(res=>{
        //this.nbrCandidature.push(res);
        this.newListOffers=res;
        this.h=this.newListOffers[0].lastDateApplication>this.currentDate.toISOString();
        //console.log("AAAAA"+JSON.stringify(this.newListOffers))
        //console.log("GGG"+this.currentDate<this.newListOffers[0].lastDateApplication+"date"+this.currentDate)
      })
    
  }
  detail(){
    alert('Your details are displayed')
  }

}
