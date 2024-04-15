import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/models/candidature';
import { User } from 'src/app/models/user';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UserAnasService } from 'src/app/services/user-anas.service';

@Component({
  selector: 'app-afficher-candidaturs-user',
  templateUrl: './afficher-candidaturs-user.component.html',
  styleUrls: ['./afficher-candidaturs-user.component.css']
})
export class AfficherCandidatursUserComponent implements OnInit{

  listCandidatures:Candidature[]=[]
  user!:User;

  constructor(private candidatureService:CandidatureService,private userS:UserAnasService){  }
  
  ngOnInit(): void {
    //this.user=this.userS.getUser()
  this.user=JSON.parse(localStorage.getItem("user"))
  this.candidatureService.getAllApplicationsByUser(this.user.id).subscribe((data:Candidature[])=>{
  this.listCandidatures=data
  console.log("mylist:"+JSON.stringify(this.listCandidatures))
    })
  }
  //getAllApplicationsByUser
}
