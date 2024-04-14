import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  userForm!: FormGroup;
  formData = new FormData();
  selectedFile!: File;
  user!:User;
  userRole!: string;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private userService:UserService, private route:Router){  }

  ngOnInit(): void {
    this.userForm=new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastname:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      phonenumber:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      file:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
    })
  }

    get firstname (){return this.userForm.get('firstname')}
    get lastname(){return this.userForm.get('lastname')}
    get name(){return this.userForm.get('name')}
    get phonenumber(){return this.userForm.get('phonenumber')}
    get email(){return this.userForm.get('email')}
    get password(){return this.userForm.get('password')}

  onFileSelected(event: any): void {
  const fileList: FileList = event.target.files;
  if (fileList && fileList.length > 0) {
    if (fileList[0].name.split('.').pop() == "pdf"){

    this.selectedFile = fileList[0];
    }
    else {
      Swal.fire({
            icon: 'warning',
            title: 'Erreur',
            text: "Le fichier doit etre pdf"
        });
        this.fileInput.nativeElement.value = null;
    }
  }
}

  selectType(event : any):void{
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    this.userRole = selectedValue;
    console.log("offre selectionne : "+this.userRole);
  }

  signup(){

    this.user=this.userForm.value; 
      this.formData.append('name', this.name?.value);
      this.formData.append('email', this.email?.value);
      this.formData.append('role', this.userRole);
      this.formData.append('password', this.password?.value);
      this.formData.append('firstname', this.firstname?.value);
      this.formData.append('lastname',this.lastname?.value);
      this.formData.append('phonenumber',this.phonenumber?.value);
      this.formData.append('cv',this.selectedFile);

      if (this.name?.value=='' || this.email?.value=='' || this.password?.value=='' || this.firstname?.value=='' || this.lastname?.value=='' || this.phonenumber?.value==''){
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Completeter tous les champs"
        });
      }
      else if (this.selectedFile==null) {
          Swal.fire({
            icon: 'warning',
            title: 'Erreur',
            text: "Veillez choisir un fichier"
        });
      }
      else if (this.selectType==null) {
          Swal.fire({
            icon: 'warning',
            title: 'Erreur',
            text: "Veillez choisir  le type d'offre"
        });
      }
      else{
        this.formData.forEach(function(value, key) {
  console.log(key + ": " + value);
});
        this.userService.register(this.formData).subscribe(res=>{
        console.log( res)
        console.log("notre form"+JSON.stringify(this.userForm.value))})
        //this.route.navigate(['/offers']);
        
    }

}

}