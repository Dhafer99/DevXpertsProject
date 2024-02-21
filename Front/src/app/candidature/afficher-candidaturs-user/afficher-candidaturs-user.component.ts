import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-afficher-candidaturs-user',
  templateUrl: './afficher-candidaturs-user.component.html',
  styleUrls: ['./afficher-candidaturs-user.component.css']
})
export class AfficherCandidatursUserComponent implements OnInit{
  idUser!:number;
  listCandidatures:Candidature[]=[]

  constructor(private candidatureService:CandidatureService){  }
  
  ngOnInit(): void {
  this.idUser=1;
  this.candidatureService.getAllApplicationsByUser(this.idUser).subscribe((data:Candidature[])=>{
  this.listCandidatures=data
  console.log("mylist:"+JSON.stringify(this.listCandidatures))
    })
  }
  //getAllApplicationsByUser
}
