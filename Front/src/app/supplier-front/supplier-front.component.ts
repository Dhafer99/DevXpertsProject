import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { ServicefrontService } from '../services/servicefront.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-supplier-front',
  templateUrl: './supplier-front.component.html',
  styleUrls: ['./supplier-front.component.css']
})
export class SupplierFrontComponent implements OnInit {
  supplierList : Supplier[] = []
  myScriptElement: HTMLScriptElement;
  
  constructor(private servicesupplier : ServicefrontService){

  }
  getType(type: String){
    if (type === 'isProduct')
    {
      return 'Product'
    }else if (type ==='isService'){
      return 'Service'
    }else if (type === 'isProductAndService'){ return ('Product and Service')}
    else{ return type }
   
  }
  ngOnInit(): void {
   
    this.servicesupplier.getsupplier().subscribe((data:Supplier[])=>{
      this.supplierList = data
    })


  }
  accordionItems = [
    { expanded: true, validateButton: true },
    { expanded: true, validateButton: true },
    { expanded: true, validateButton: true }
  ];
 
  RequestSent(requestId: number){
    this.servicesupplier.affectsupplierTorequest(2,requestId).subscribe(()=> {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Request sent successfuly.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      location.reload();
    }) ;
  
  }

}
