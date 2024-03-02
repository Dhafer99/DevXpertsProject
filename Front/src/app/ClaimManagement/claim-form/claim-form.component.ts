import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.css']
})
export class ClaimFormComponent {
  claim: Claim = new Claim();

  constructor(
    private service:ClaimService,
    private router :Router,
    private http: HttpClient
    ){}


  addClaim(claimData: Claim): void {
    this.service.addClaim(claimData).subscribe(
      (response) => {
        console.log('Claim added successfully:', response);
        // You can perform additional actions here, such as displaying a success message or navigating to another page
      },
      (error) => {
        console.error('Error adding claim:', error);
        // Handle error, such as displaying an error message to the user
      }
    );
  }


}
