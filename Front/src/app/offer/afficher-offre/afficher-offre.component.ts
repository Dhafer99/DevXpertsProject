import { Component, OnInit } from '@angular/core';
import { Offer, typeOffer } from 'src/app/models/offer';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})



export class AfficherOffreComponent implements OnInit{

  constructor(private offerService:OfferService,private candidatureService:CandidatureService){  }
  
  exibitorId!:number;
  listOffers:any;
  listStages:any;
  listJobs:any;
  listRecommander:Offer[]=[]
  role!:string;
  idUser!:string;
  
  ngOnInit(): void {
    this.role="student"
    this.idUser="1"
    this.getOffersByExibitor();
    this.getOffersTypeJobByExibitor();
    this.getOffersTypeStageByExibitor();
    this.getOffresRecommanderPourUser(this.idUser);
  }

  getOffersByExibitor(){
    this.exibitorId=1;
    this.candidatureService.getCountApplicationsByOfferExhibitor(this.exibitorId.toString()).subscribe(data=>{
    this.listOffers=data
    }) 
  }

  getOffersTypeStageByExibitor(){
    this.exibitorId=1;
    this.candidatureService.getCountStagesAndOffersByOfferExhibitor(this.exibitorId.toString(),"stage").subscribe(data=>{
    this.listStages=data})
  }

  getOffersTypeJobByExibitor(){
    this.exibitorId=1;
    this.candidatureService.getCountStagesAndOffersByOfferExhibitor(this.exibitorId.toString(),"job").subscribe(data=>{
    this.listJobs=data})
  }

  getOffresRecommanderPourUser(id:string){
    this.offerService.getRecommandedOffersForUser(id).subscribe(res=>{
      this.listRecommander=res
    })
  }

  detail(){
    alert('Your details are displayed'+this.listOffers[0]['file']) //
  }
}