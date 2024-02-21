import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OfferService } from 'src/app/services/offer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit{
  offer!:Offer;
   id=0
   data!:any;
   blob !:any;
   fileUrl!:any;
   formData = new FormData();
   idCandidat!:number;
   modalReference :any; 
   selectedFile!: File;
  constructor(private activateroute:ActivatedRoute,private offerService:OfferService,private route:Router,private candidatureService:CandidatureService,private modalService: NgbModal){
  }
  ngOnInit(): void {
    this.idCandidat=1;
    this.id=this.activateroute.snapshot.params['id'];
    this.offerService.getOfferById(this.id).subscribe((data)=>{
    this.offer=data
    console.log("une offre:"+JSON.stringify(this.offer))
    })
    this.data = 'some text';
    this.blob = new Blob([this.offer.file], { type: 'application/octet-stream' });
    this.fileUrl = window.URL.createObjectURL(this.blob);
  }
  supprimer(){
    //alert('supprimer')
    this.offerService.deleteOffer(this.offer.id).subscribe(()=>{})
    this.route.navigate(['/offers'])
    /*if (!this.offerService.deleteOffer(this.offer.id)==false){
      alert('Suppression réussie');
      this.route.navigate(['/offers'])
    }else{
      alert('Erreur de Suppression');
    }*/
    //this.offerService.deleteOffer(this.offer.id);
    //this.route.navigate(['/offers']);
    //window.location.reload();
  }
  modifier(){
    alert('modifier')
    //this.offerService.updateOffer(this.offer);
  }
  downloadFile(){
    convertToPdf(this.offer.file)
  }
  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }
  postuler(){
      this.formData.append('idOffer', this.id.toString());
      this.formData.append('file', this.selectedFile);
      this.formData.append('idCandidat',this.idCandidat.toString());
      /*if (this.description?.value=='' || this.lastDateApplication?.value=='' || this.nbrCandidature?.value=='' || this.file?.value==''){
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Completeter tous les champs"
        });
      }*/
      //else{
        this.candidatureService.addApplication(this.formData).subscribe(()=>{
        console.log( "l'offre a été ajoutée")
        this.modalReference.close();
        //console.log("notre form"+JSON.stringify(this.offerForm.value))})
        this.route.navigate(['/offers']);
        
    })
  }
  openLg(content: any) {
        this.modalReference=this.modalService.open(content, { size: 'md'});
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
