import { Component, OnInit } from '@angular/core';
import { Offer, typeOffer } from 'src/app/models/offer';
import { User } from 'src/app/models/user';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OfferService } from 'src/app/services/offer.service';
import { UserAnasService } from 'src/app/services/user-anas.service';

@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})



export class AfficherOffreComponent implements OnInit{

  constructor(private offerService:OfferService,private candidatureService:CandidatureService,private userS:UserAnasService){  }
  
  exibitorId!:number;
  listOffers:any;
  listStages:any;
  listJobs:any;
  listRecommander:any;
  user!:User;
  
  ngOnInit(): void {
    this.user=this.userS.getUser();
    if (this.user.role=="exibitor"){
      this.getOffersByExibitor(this.user.id.toString());
      this.getOffersTypeJobByExibitor(this.user.id.toString());
      this.getOffersTypeStageByExibitor(this.user.id.toString());
    }
    else {
      this.getOffersForUser();
      this.getJobsForUser();
      this.getStagesForUser();
      this.getOffresRecommanderPourUser(this.user.id.toString());
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