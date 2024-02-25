import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit{

  constructor(private offerService:OfferService, private route:Router){  }

  selectedFile!: File;
  offerType!: string;
  uploadProgress!: number;

  offerForm!:FormGroup;
  offer!:Offer;
  formData = new FormData();
  //params = new HttpParams();

  ngOnInit(): void {
    //this.id=this.acr.snapshot.params['id']
    this.offerForm=new FormGroup({
      description:new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastDateApplication:new FormControl('',Validators.required),
      nbrCandidature:new FormControl('',Validators.required),
      file:new FormControl('',Validators.required),
    })
  }
    get description(){return this.offerForm.get('description')}
    get lastDateApplication(){return this.offerForm.get('lastDateApplication')}
    get nbrCandidature(){return this.offerForm.get('nbrCandidature')}
    get file(){return this.offerForm.get('file')}
    get typeOffre(){return this.offerForm.get('typeOffer')}


    //FILE

    onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  selectType(event : any):void{
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    this.offerType = selectedValue;
    console.log("offre selectionne : "+this.offerType);
  }

    //End File
    add(){
      this.offer=this.offerForm.value; 
      this.formData.append('description', this.description?.value);
      this.formData.append('lastDateApplication', this.lastDateApplication?.value);
      this.formData.append('nbrCandidature', this.nbrCandidature?.value);
      this.formData.append('file', this.selectedFile);
      this.formData.append('exibitorId',this.nbrCandidature?.value);
      this.formData.append('typeOffer',this.offerType);

      
      if (this.description?.value=='' || this.lastDateApplication?.value=='' || this.nbrCandidature?.value=='' || this.file?.value=='' || this.typeOffre?.value==''){
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Completeter tous les champs"
        });
      }
      else{
        this.offerService.addOffer(this.formData).subscribe(()=>{
        console.log( "l'offre a été ajoutée")
        console.log("notre form"+JSON.stringify(this.offerForm.value))})
        this.route.navigate(['/offers']);
        
    }
  }

}
