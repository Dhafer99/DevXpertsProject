import { Pack } from "./Pack";

export class Room{

    idRoom!:number;
    codeRoom!:string;
    price!:number;
    priceAuction!:number;
    typePack!:string;
    dateDebut!:Date;
    duration !:number;
    description!:string
    status !:boolean;
    maxParticipants!:number;
    confirmedParticipant!:number;
    packages!:Pack[]
}