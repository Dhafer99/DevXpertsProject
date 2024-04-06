import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtClientService } from '../services/jwt-client.service';
import { ServicebackService } from '../services/serviceback.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  authForm!: FormGroup;
  userID !: number ;
  request ={
    username: "",
    password: ""
  }
  constructor(private formBuilder: FormBuilder,private serviceToken : JwtClientService,private serviceback: ServicebackService) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });


   
  }

  login() {
    if (this.authForm.valid) {
      // Perform login operation, e.g., send data to server
      this.request.username=this.authForm.get('email').value
      this.request.password=this.authForm.get('password').value
      this.serviceToken.generateToken(this.request).subscribe(data =>
        {
          console.log(data);
          this.serviceToken.setToken(data);

          this.serviceback.getUserId(this.request.username).subscribe( (data:number) => {
                this.userID= data ;
                console.log("user id ")
                console.log(data);

                localStorage.setItem("userID",this.userID.toString())

          })
        }
        ,(err) => {
          console.log("error getting user or bad credential")
        }
        
        );
      console.log(this.authForm.value);
    } else {
      // Handle invalid form
      console.log("Invalid form");
    }
  }

}
