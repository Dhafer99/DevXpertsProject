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
  listRecommander:any;
  role!:string;
  idUser!:string;
  idExibitor!:string;
  
  ngOnInit(): void {
    //this.role="student"
    this.role="exibitor"
    this.idUser="1"
    this.idExibitor="2"
    if (this.role=="exibitor"){
      this.getOffersByExibitor(this.idExibitor);
      this.getOffersTypeJobByExibitor(this.idExibitor);
      this.getOffersTypeStageByExibitor(this.idExibitor);
    }
    else {
      this.getOffersForUser();
      this.getJobsForUser();
      this.getStagesForUser();
      this.getOffresRecommanderPourUser(this.idUser);
    }
  
  }

  getOffersForUser(){
    this.candidatureService.nbrApplicationOnOffer().subscribe(res=>{
        //this.nbrCandidature.push(res);
        this.listOffers=res;
      })
  }
  getJobsForUser(){
    this.candidatureService.getCountApplicationsByOfferANdTypeOffer("job").subscribe(res=>{
        //this.nbrCandidature.push(res);
        this.listJobs=res;
      })
  }
  getStagesForUser(){
    this.candidatureService.getCountApplicationsByOfferANdTypeOffer("stage").subscribe(res=>{
        //this.nbrCandidature.push(res);
        this.listStages=res;
      })
  }
  getOffresRecommanderPourUser(id:string){
    this.candidatureService.getRecommendedOffersForUserApp(id).subscribe(res=>{
      this.listRecommander=res
    })
  }

  getOffersByExibitor(id:string){
    this.candidatureService.getCountApplicationsByOfferExhibitor(id).subscribe(data=>{
    this.listOffers=data
    }) 
  }

  getOffersTypeStageByExibitor(id:string){
    this.candidatureService.getCountStagesAndOffersByOfferExhibitor(id,"stage").subscribe(data=>{
    this.listStages=data})
  }

  getOffersTypeJobByExibitor(id:string){
    this.candidatureService.getCountStagesAndOffersByOfferExhibitor(id,"job").subscribe(data=>{
    this.listJobs=data})
  }


  detail(){
    alert('Your details are displayed'+this.listOffers[0]['file']) //
  }
}