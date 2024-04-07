import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { ServicefrontService } from '../services/servicefront.service';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { SupplierOffer } from '../models/SupplierOffer';
@Component({
  selector: 'app-newsupplierfront',
  templateUrl: './newsupplierfront.component.html',
  styleUrls: ['./newsupplierfront.component.css']
})
export class NewsupplierfrontComponent implements OnInit{
 
  supplierOffer: SupplierOffer = {
    description: "" ,
    price : 0
  }
  openDialog(itemId:number): void {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      data: {supplierOffer: this.supplierOffer},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.price)
      this.supplierOffer.description=result.description ;
      this.supplierOffer.price=result.price ;
      this.servicefront.addSupplierOffer(this.supplierOffer,3,itemId).subscribe((data:any)=>{
        console.log("returned data after supplier suggestion :")
        console.log(data);
      })
    });
  }

  SupplierList: Supplier[]= [];
  ngOnInit(): void {

    this.servicefront.getsupplier().subscribe((data:Supplier[])=>{
      this.SupplierList = data 
      console.log(data)
    });
   
  }
  RequestSent(requestId: number) {
    this.servicefront.addNotification(2).subscribe();
    this.servicefront.affectsupplierTorequest(2, requestId).subscribe(() => {
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

  
  constructor(private servicefront: ServicefrontService,public dialog: MatDialog){}

  

}
