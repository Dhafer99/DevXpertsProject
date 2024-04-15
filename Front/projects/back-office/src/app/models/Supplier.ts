import { Image } from "./SupplyRequest";
import { User } from "./User";

export class Supplier{
    id!:number;
    requirement!:String;
    quantity!: number ;
    price: number ;
    boothPosition: String ;
    productname: String ;
    servicename: String ;
    type : String ;
    status :String ;
    supplier : User ;
   image!:Image;
}
export enum typerequirement {
    isProduct,isService
}
export enum status {
    NotApproved,Pending,Approved
}