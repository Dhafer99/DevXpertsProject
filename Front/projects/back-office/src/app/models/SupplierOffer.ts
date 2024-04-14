

import { Supplier } from './Supplier';
import { User } from './User';


export class SupplierOffer {

    id:number ;
    description: string ;
    price:number ;
    supplierRequest:Supplier ;
    supplier: User 
    status:string
}