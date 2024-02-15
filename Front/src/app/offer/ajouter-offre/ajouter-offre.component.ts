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

  offerForm!:FormGroup;

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

    add(){
      if (this.description?.value=='' || this.lastDateApplication?.value=='' || this.nbrCandidature?.value=='' || this.file?.value==''){
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Completeter tous les champs"
        });
      }
      else{
      this.offerService.addOffer(this.offerForm.value).subscribe(()=>{
        console.log( "l'offre a été ajoutée")
        console.log("notre form"+JSON.stringify(this.offerForm.value))})
        this.route.navigate(['/offers']);
    }
  }

}
