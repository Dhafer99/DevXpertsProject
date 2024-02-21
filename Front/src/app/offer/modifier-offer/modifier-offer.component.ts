import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-offer',
  templateUrl: './modifier-offer.component.html',
  styleUrls: ['./modifier-offer.component.css']
})
export class ModifierOfferComponent {

  constructor(private offerService:OfferService, private route:Router,private activateroute:ActivatedRoute){  }

  selectedFile!: File;
  uploadProgress!: number;
  id!:number;
  offerForm!:FormGroup;
  offer!:Offer;
  formData = new FormData();
  params = new HttpParams();

  ngOnInit(): void {

    this.id=this.activateroute.snapshot.params['id'];
    this.getOffer(this.id);
    

    //this.id=this.acr.snapshot.params['id']
    this.offerForm=new FormGroup({
      description:new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastDateApplication:new FormControl('',Validators.required),
      nbrCandidature:new FormControl('',Validators.required),
      file:new FormControl('',Validators.required),
    })
  }
  getOffer(id:number){
    this.offerService.getOfferById(id).subscribe((data)=>{
    this.offer=data
    console.log("une offre:"+JSON.stringify(this.offer))
    })
  }
    get description(){return this.offerForm.get('description')}
    get lastDateApplication(){return this.offerForm.get('lastDateApplication')}
    get nbrCandidature(){return this.offerForm.get('nbrCandidature')}
    get file(){return this.offerForm.get('file')}


    //FILE

    onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

    //End File
    update(){
      //this.offer=this.offerForm.value; 
      //Utiliser ca apres la correction du path
      //this.formData.append('idOffer',String(this.id));
      this.formData.append('idOffer',String(this.offer.id));
      this.formData.append('description', this.description?.value);
      this.formData.append('lastDateApplication', this.lastDateApplication?.value);
      this.formData.append('nbrCandidature', this.nbrCandidature?.value);
      this.formData.append('file', this.selectedFile);
      this.formData.append('exibitorId',this.nbrCandidature?.value);
      this.formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
      if (this.description?.value=='' || this.lastDateApplication?.value=='' || this.nbrCandidature?.value=='' || this.file?.value==''){
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Completeter tous les champs"
        });
      }
      else{
        this.offerService.updateOffer(this.formData).subscribe(()=>{
        console.log( "l'offre a été ajoutée")
        console.log("notre form"+JSON.stringify(this.offerForm.value))})
        this.route.navigate(['/offers']);
        
    }
  }


}
