import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { ServicebackService } from '../services/serviceback.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supply-requests-dashboard',
  templateUrl: './supply-requests-dashboard.component.html',
  styleUrls: ['./supply-requests-dashboard.component.css']
})
export class SupplyRequestsDashboardComponent implements OnInit{

  getType(type: String){
    if (type === 'isProduct')
    {
      return 'Product'
    }else if (type ==='isService'){
      return 'Service'
    }else if (type === 'isProductAndService'){ return ('Product and Service')}
    else{ return type }
   
  }

  setStatusAccepted(requestid:number) { 
    this.supplierService.setRequestStatus(requestid, 'Approved').subscribe((data: any[]) => {
     location.reload()
    });
    

  }
  setStatusRefused(requestid:number){
    this.supplierService.setRequestStatus(requestid,'NotApproved').subscribe((data:any[]) =>
    console.log(data)
    );
    location.reload()

  }

  SupplyRequestList: Supplier[] =[];
  constructor(private supplierService: ServicebackService,private router:Router){

  }
  ngOnInit(): void {
    this.supplierService.getsupplier().subscribe((data:Supplier[])=>{
      this.SupplyRequestList= data
      console.log(data);
  })
  }
  deleteSupplier(supplier:Supplier){
    this.supplierService.deletesupplier(supplier.id).subscribe((data)=>
    {
      Swal.fire('Selected', `Deleted: ${supplier.productname?supplier.productname:supplier.servicename}  with Sucess `, 'success');
      setTimeout(()=> 
      {
        location.reload();
      },1000)
    })
  }
  updateSupplier(suplier:Supplier){
    this.router.navigate(['/supplier',suplier.id]);
  }

}
