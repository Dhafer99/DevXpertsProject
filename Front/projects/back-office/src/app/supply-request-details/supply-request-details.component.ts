import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../models/Supplier';
import { ServicebackService } from '../services/serviceback.service';
import { SupplyRequest } from '../models/SupplyRequest';
import { User } from '../models/User';
import { SupplierOffer } from '../models/SupplierOffer';

@Component({
  selector: 'app-supply-request-details',
  templateUrl: './supply-request-details.component.html',
  styleUrls: ['./supply-request-details.component.css']
})
export class SupplyRequestDetailsComponent implements OnInit {
  supplyRequest: SupplyRequest = {
    id:0,
    requirement:'String',
    quantity: 0 ,
    price: 0 ,
    boothPosition: 'String' ,
    productname: 'String' ,
    servicename: 'String' ,
    type : 'String' ,
    status :'String' ,
   
   image:null
}
Suppliers : User[]=[];
SupplyOffer : SupplierOffer[]=[];
  constructor(private serviceback:ServicebackService ,private acr:ActivatedRoute){}
  ngOnInit(): void {

   
    this.serviceback.getsupplier().subscribe((data:Supplier[])=>{
      this.SupplyRequestList=data
    
  
  
  this.acr.params.subscribe((params)=>{
    this.serviceback.getsupplierItemById(params['id']).subscribe((data)=>{
      console.log(params['id'])
      console.log(data)
     this.supplyRequest= data;
     this.serviceback.getSuppliersOffers(params['id']).subscribe((data:User[])=>{
      this.Suppliers=data ;
      console.log(data);
    })
    
    })
    this.serviceback.getAllOfferForSupplyRequest(params['id']).subscribe((data:SupplierOffer[])=>{
      this.SupplyOffer=data ;
      console.log("SUPPLIER OFFER DATA :")
      console.log(data);
      
    })
  });
  })
  }
  SupplyRequestList : Supplier[]=[]
}
