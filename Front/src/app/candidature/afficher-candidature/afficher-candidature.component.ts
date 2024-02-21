import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-afficher-candidature',
  templateUrl: './afficher-candidature.component.html',
  styleUrls: ['./afficher-candidature.component.css']
})
export class AfficherCandidatureComponent implements OnInit{

  constructor(private activateroute:ActivatedRoute,private candidatureService:CandidatureService){  }
  
  listCandidatures:Candidature[]=[]
  id!:number
  
  ngOnInit(): void {
  this.id=this.activateroute.snapshot.params['id'];
  this.candidatureService.getAllApplicationsByOffer(this.id).subscribe((data:Candidature[])=>{
  this.listCandidatures=data
  console.log("mylist:"+JSON.stringify(this.listCandidatures))
    })
  }
  detail(){
    alert('Your details are displayed')
  }

}
