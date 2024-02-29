import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidature, Status } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-afficher-candidature',
  templateUrl: './afficher-candidature.component.html',
  styleUrls: ['./afficher-candidature.component.css']
})
export class AfficherCandidatureComponent implements OnInit{

  constructor(private activateroute:ActivatedRoute,private candidatureService:CandidatureService,private http: HttpClient){  }
  
  listCandidatures:Candidature[]=[]
  id!:number
  encours!:Status;
  rejeter!:Status;
  accepter!:Status;
  formData = new FormData();
  
  ngOnInit(): void {
    this.encours=Status.en_cours;
    this.rejeter=Status.refusé;
    this.accepter=Status.accépté;
  this.id=this.activateroute.snapshot.params['id'];
  this.candidatureService.getAllApplicationsByOffer(this.id).subscribe((data:Candidature[])=>{
  this.listCandidatures=data
  console.log("mylist:"+JSON.stringify(this.listCandidatures))
    })
  }


  accepterCandidature(id:string){
    this.formData.append('status', 'accépté');
    this.formData.append('idApplication', id);
    this.candidatureService.changeStatus(this.formData).subscribe(()=>{
      window.location.reload();
    })
  }

  refuserCandidature(id:string){
    this.formData.append('status', 'refusé');
    this.formData.append('idApplication', id);
    this.candidatureService.changeStatus(this.formData).subscribe(()=>{
      window.location.reload();
    })
  }

  telechargerDocument(id: number) {
    const url = 'http://localhost:8899/api/Application/telecharger-pdf/'+id;
    this.http.get(url, { observe: 'response', responseType: 'blob' })
      .subscribe((response: HttpResponse<Blob>) => {
        this.telechargerFichier(response.body);
      });
  }

  telechargerFichier(data: Blob | null) {
  if (data !== null) {
    const nomFichier = 'Motivation.pdf';
    saveAs(data, nomFichier);
  }

}
}

