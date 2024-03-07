import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';

import Swal from 'sweetalert2';

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

  deleteClaim(claimId: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteClaim(claimId).subscribe(
          () => {
            Swal.fire({
              title: "Deleted!",
              text: "Your claim has been deleted.",
              icon: "success"
            }).then(() => {
              location.reload(); // Reload the page after successful deletion
            });
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the claim.",
              icon: "error"
            });
          }
        );
      }
    });
  }

  rejectClaim(claimId: number): void {
    this.deleteClaim(claimId);
  }

}
