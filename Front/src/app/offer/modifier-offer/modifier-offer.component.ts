import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer, typeOffer } from 'src/app/models/offer';
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
  offerType!: string;
  seletedValue!:string;
  fileClicked: boolean = false;
  typeClicked: boolean = false;

  ngOnInit(): void {

    this.id=this.activateroute.snapshot.params['id'];
    this.getOffer(this.id);
    //this.seletedValue=this.offer.typeOffer.toString();
    //console.log(this.seletedValue)

    //this.id=this.acr.snapshot.params['id']
    this.offerForm=new FormGroup({
      description:new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastDateApplication:new FormControl('',Validators.required),
      nbrCandidature:new FormControl('',Validators.required),
      file:new FormControl('',Validators.required),
      titre:new FormControl('',Validators.required),
    })
  }
  getOffer(id:number){
    this.offerService.getOfferById(id).subscribe((data)=>{
    this.offer=data
    console.log("une offre:"+JSON.stringify(this.offer.offer))
    })
  }
    get description(){return this.offerForm.get('description')}
    get lastDateApplication(){return this.offerForm.get('lastDateApplication')}
    get nbrCandidature(){return this.offerForm.get('nbrCandidature')}
    get file(){return this.offerForm.get('file')}
    get titre(){return this.offerForm.get('titre')}
    get typeOffre(){return this.offerForm.get('typeOffer')}


    //FILE

    onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
    this.fileClicked=true;
  }
  selectType(event : any):void{
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    this.offerType = selectedValue;
    console.log("offre selectionne : "+this.offerType);
    this.typeClicked=true
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
      this.formData.append('exibitorId',this.nbrCandidature?.value);
      this.formData.append('titre',this.titre?.value);
      if (!this.fileClicked && !this.typeClicked){
        this.formData.append('file', this.offer.file);
        this.formData.append('typeOffer',this.offer.offer.toString());
        console.log("hhhhhh")
      }
      else if (!this.fileClicked){//(this.selectedFile==undefined){
        this.formData.append('file', this.offer.file);
        console.log("1")
      }
      else if (!this.typeClicked){//(this.offerType==null){
        this.formData.append('typeOffer',this.offer.offer.toString());
        console.log("3")
      }
      else{
        this.formData.append('file', this.selectedFile);
        this.formData.append('typeOffer',this.offerType);
      }
      /*else if (this.fileClicked){
        this.formData.append('file', this.selectedFile);
        console.log("2")
      }
      else if (this.typeClicked){
        this.formData.append('typeOffer',this.offerType);
        console.log("4")
      }*/
      this.formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
        this.offerService.updateOffer(this.formData).subscribe(()=>{
        console.log( "l'offre a été ajoutée")
        console.log("notre form"+JSON.stringify(this.offerForm.value))
        this.route.navigate(['/offers']);
      })
        
}


}
