
export class Supplier{
    id! : number ;
    requirement!:String;
    quantity!: number ;
    price: number ;
    boothPosition: String ;
    productname: String ;
    servicename: String ;
    type : String ;
    status :String ;
}
export enum typerequirement {
    isProduct,isService,isProductAndService
}
export enum status {
    NotApproved,Pending,Approved
}