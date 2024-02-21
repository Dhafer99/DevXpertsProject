import { Pack } from "./Pack";

export class Room{

    idRoom!:number;
    codeRoom!:number;
    price!:number;
    typePack!:string;
    dateDebut!:Date;
    duration !:number;
    description!:string
    status !:boolean;
    maxParticipants!:number;
    packages!:Pack[]
}