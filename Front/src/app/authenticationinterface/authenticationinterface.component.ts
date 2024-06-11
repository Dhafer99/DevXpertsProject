import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtClientService } from '../services/jwt-client.service';
import { ServicebackService } from 'projects/back-office/src/app/services/serviceback.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticationinterface',
  templateUrl: './authenticationinterface.component.html',
  styleUrls: ['./authenticationinterface.component.css']
})
export class AuthenticationinterfaceComponent implements OnInit {
  authForm!: FormGroup;
  userID !: number ;
  user !: User;
  request ={
    email: "",
    password: ""
  }
  constructor(private formBuilder: FormBuilder,private serviceToken : JwtClientService,private serviceback: ServicebackService,private userService: UserService,private route:Router) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    const navbarMenu = document.querySelector<HTMLDivElement>(".navbar .links");
    const hamburgerBtn = document.querySelector<HTMLButtonElement>(".hamburger-btn");
    const hideMenuBtn = navbarMenu?.querySelector<HTMLButtonElement>(".close-btn");
    const showPopupBtn = document.querySelector<HTMLButtonElement>(".login-btn");
    const formPopup = document.querySelector<HTMLDivElement>(".form-popup");
    const hidePopupBtn = formPopup?.querySelector<HTMLButtonElement>(".close-btn");
    const signupLoginLink = formPopup?.querySelectorAll<HTMLAnchorElement>(".bottom-link a");
    
    if (hamburgerBtn && navbarMenu) {
        // Show mobile menu
        hamburgerBtn.addEventListener("click", () => {
            navbarMenu.classList.toggle("show-menu");
        });
    
        // Hide mobile menu
        if (hideMenuBtn) {
            hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());
        }
    }
    
    if (showPopupBtn && formPopup) {
        // Show login popup
        showPopupBtn.addEventListener("click", () => {
            document.body.classList.toggle("show-popup");
        });
    
        // Hide login popup
        if (hidePopupBtn) {
            hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
        }
    
        // Show or hide signup form
        if (signupLoginLink) {
            signupLoginLink.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (link.id === 'signup-link') {
                        formPopup.classList.add("show-signup");
                    } else {
                        formPopup.classList.remove("show-signup");
                    }
                });
            });
        }
    }
    
   
  }

  login() {
    if (this.authForm.valid) {
      // Perform login operation, e.g., send data to server
      this.request.email=this.authForm.get('email').value
      this.request.password=this.authForm.get('password').value
      this.serviceToken.generateToken(this.request).subscribe(data =>
        {
          console.log(data);
          this.serviceToken.setToken(data);

          this.serviceback.getUserId(this.request.email).subscribe( (data:number) => {
                this.userID= data ;
                console.log("user id ")
                console.log(data);
                this.userService.getUser(this.userID.toString()).subscribe(res=>{
                  //this.nbrCandidature.push(res);
                  this.user=res;
                  localStorage.setItem("user",JSON.stringify(res));
                })
                localStorage.setItem("userID",this.userID.toString())
                
                this.route.navigate(['/list'])
                
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
