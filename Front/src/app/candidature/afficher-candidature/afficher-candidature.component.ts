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
  
  //listCandidatures:Candidature[]=[]
  listCandidatures:any;
  listOccurence:number[]=[]
  tab!:any;
  id!:number
  encours!:Status;
  rejeter!:Status;
  accepter!:Status;
  formData = new FormData();
  titre:string='';
  
  ngOnInit(): void {
    this.encours=Status.en_cours;
    this.rejeter=Status.refusé;
    this.accepter=Status.accépté;
    this.id=this.activateroute.snapshot.params['id'];
    this.getAllAppByOffer();
  }

  getAllAppByOffer(){
    this.candidatureService.getAllApplicationsByOffer(this.id).subscribe((data:Candidature[])=>{
    this.listCandidatures=data
    //console.log("mylist:"+JSON.stringify(this.listCandidatures))
    })
  }

  afficherRech(){
    console.log(this.titre)
    if(this.titre==''){
      this.getAllAppByOffer();
    }
  }

  rechercheCV(){
    console.log(this.titre=='')
    //if(this.titre!=''){
    for (let i=0; i<this.listCandidatures.length; i++){
      console.log(this.listCandidatures[i].id.toString())
      
        this.candidatureService.searchInCV(this.listCandidatures[i].id.toString(),this.titre).subscribe((data:any)=>{
        this.listCandidatures[i].occ = data[0].occ;
        this.tab=data
        console.log(data[0])
        this.listOccurence.push(data[0].occ);
        if(data[0].occ==0 || data[0].occ==undefined){
          //this.listCandidatures.splice(i,1)
        }
        /*else if (this.tab!=0){
          //this.listOccurence=[]
          this.listOccurence[i]=this.tab
        }*/
        })
      }
      console.log(this.listCandidatures)
  }

  /*
  this.offerService.getRecommandedOffersForUser(id).subscribe(res => {
      this.listRecommanderBack=res
      //this.listRecommanderBack = res as Offer[];

    for (let i = 0; i < this.listRecommanderBack.length; i++) {
    let of = this.listRecommanderBack[i];

    for (let i = 0; i < this.listRecommander.length; i++) {
      let offre = this.listRecommander[i];
      if (of.id==offre[0].id)
      {
        this.lisRecFinal.push(offre);
        this.pourcentageOffre.push(of.pourcentage);
        console.log(offre[0]);
      }
    }
    for (let i=0; i< this.lisRecFinal.length ; i++) {
      this.lisRecFinal[i][5] =  this.pourcentageOffre[i]// Remplacez "Valeur de o[5]" par la valeur souhaitée
    }
    console.log(this.lisRecFinal+"KKKK")

    //console.log(offre.id);
    }

    //console.log(titres)
      console.log(JSON.stringify(this.listOffers.length))
    })

  */


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

