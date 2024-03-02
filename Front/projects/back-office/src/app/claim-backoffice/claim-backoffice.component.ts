import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-backoffice',
  templateUrl: './claim-backoffice.component.html',
  styleUrls: ['./claim-backoffice.component.css']
})
export class ClaimBackofficeComponent implements OnInit {

  //claims! : Claim[];
  claims: Claim[] = [];

  constructor(
    private router: Router,
    private service: ClaimService
  ){}

  ngOnInit(): void {
    this.getClaims();
   }

   private getClaims(){
    this.service.getClaimsList().subscribe (
      (response: Claim[]) => {
        console.log("salma 1" + response);
        this.claims = response;
        console.log("salma 2" + this.claims);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

   goToclaimsList(){
    this.router.navigate(['/claims']);
  }
}
