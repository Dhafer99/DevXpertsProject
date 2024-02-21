import { Room } from "./Room";

export class Pack{
    idPack!:number;
    quantity!:number;
    typePack!:string;
    description!:string;
    status!:boolean;
    price!:number;
    reserved!:boolean;
    room!:Room;
}