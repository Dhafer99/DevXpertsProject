import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidature, Status } from 'src/app/models/candidature';
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
  detail(id:number){
    alert('number'+id)
  }

  downloadFile(){
    convertToPdf(this.listCandidatures[0].file)
    alert(this.listCandidatures[0].status.toString()=="en_cours")
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

}


function convertToPdf(blob: Blob) {
  /*const fileReader = new FileReader();
  fileReader.onloadend = () => {
    const arrayBuffer = fileReader.result as ArrayBuffer;
    const uint8Array = new Uint8Array(arrayBuffer);
    getDocument(uint8Array).promise.then((pdf) => {
      pdf.getData().then((data) => {
        const pdfBlob = new Blob([data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'converted.pdf');
      });
    }).catch((error) => {
      // Handle errors here.
    });
  };
  fileReader.readAsArrayBuffer(blob);*/
 
}