import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-afficher-candidature-offre-admin',
  templateUrl: './afficher-candidature-offre-admin.component.html',
  styleUrls: ['./afficher-candidature-offre-admin.component.css']
})
export class AfficherCandidatureOffreAdminComponent implements OnInit{
  id!:number;
  listCandidatures:Candidature[]=[]
  constructor(private activateroute:ActivatedRoute,private route:Router,private candidatureService:CandidatureService){}
  ngOnInit(): void {
    this.id=this.activateroute.snapshot.params['id'];
    this.getAllAppByOffer()
  }
  getAllAppByOffer(){
      this.candidatureService.getAllApplicationsByOffer(this.id).subscribe((data:Candidature[])=>{
    this.listCandidatures=data
    console.log("mylist:"+JSON.stringify(this.listCandidatures))
    })
  }

}
