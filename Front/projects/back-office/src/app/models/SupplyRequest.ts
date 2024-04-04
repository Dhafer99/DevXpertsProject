export class SupplyRequest{
    id!:number;
    requirement!:String;
    quantity!: number ;
    price: number ;
    boothPosition: String ;
    productname: String ;
    servicename: String ;
    type : String ;
    status :String ;
    image!:Image
}

export class Image {
    id?: number;
    name?: string;
    imageUrl?: string;
    imageId?: string;
}