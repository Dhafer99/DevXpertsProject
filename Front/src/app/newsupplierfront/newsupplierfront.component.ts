import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { ServicefrontService } from '../services/servicefront.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-newsupplierfront',
  templateUrl: './newsupplierfront.component.html',
  styleUrls: ['./newsupplierfront.component.css']
})
export class NewsupplierfrontComponent implements OnInit{

  SupplierList: Supplier[]= [];
  ngOnInit(): void {

    this.servicefront.getsupplier().subscribe((data:Supplier[])=>{
      this.SupplierList = data 
      console.log(data)
    });
   
  }
  RequestSent(requestId: number) {
    this.servicefront.affectsupplierTorequest(24, requestId).subscribe(() => {
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Request sent successfully.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload();
        });
      }, 1000);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    });
  }
  
  UnsendRequest(supplyRequestid:number){
   

    this.servicefront.removeSupplierFromSupplyRequest(supplyRequestid).subscribe(()=> {
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Request unsent successfully.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload();
        });
      }, 1000);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    });

  }

  
  constructor(private servicefront: ServicefrontService){}

}
