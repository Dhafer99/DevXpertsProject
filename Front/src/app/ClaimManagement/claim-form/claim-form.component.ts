import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.css']
})
export class ClaimFormComponent {
  claim: Claim = new Claim();
  claims: Claim[] = [];

  constructor(
    private service:ClaimService,
    private router :Router,
    private http: HttpClient
    
    ){}


    addClaim(claimData: Claim): void {
      // Validate form inputs
      if (!claimData.date || !claimData.subject || !claimData.description) {
        Swal.fire({
          title: 'Error',
          text: 'Please fill in all fields.',
          icon: 'error'
        });
        return;
      }
    
      this.service.addClaim(claimData).subscribe(
        (response) => {
          console.log('Claim added successfully:', response);
          Swal.fire({
            title: 'Success',
            text: 'Your claim has been added successfully.',
            icon: 'success'
          }).then(() => {
            location.reload(); // Reload the page after the Swal pop-up is closed
          });
        },
        (error) => {
          console.error('Error adding claim:', error);
          Swal.fire({
            title: 'Error',
            text: 'An error occurred while adding your claim.',
            icon: 'error'
          });
        }
      );
    }
  
  private getClaims() {
    this.service.getClaimsList().subscribe(
      (response: Claim[]) => {
        // Build the HTML table string
        let tableHtml = '<table class="table">';
        tableHtml += '<thead><tr><th>Date</th><th>Subject</th><th>Description</th></tr></thead>';
        tableHtml += '<tbody>';
  
        response.forEach((claim: Claim) => {
          tableHtml += `<tr>
            <td>${claim.date}</td>
            <td>${claim.subject}</td>
            <td>${claim.description}</td>
          </tr>`;
        });
  
        tableHtml += '</tbody></table>';
  
        // Add cancel button to Swal modal
        tableHtml += '<button class="btn btn-danger mt-3" id="cancelButton">Cancel</button>';
  
        // Show Swal modal with the claims table and cancel button
        Swal.fire({
          title: 'Claims',
          html: tableHtml,
          icon: 'info',
          showCloseButton: true,
          showConfirmButton: false,
          didOpen: () => {
            const cancelButton = document.getElementById('cancelButton');
            if (cancelButton) {
              cancelButton.addEventListener('click', () => {
                Swal.close();
              });
            }
          }
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  showClaims() {
    this.getClaims();
  }

}
