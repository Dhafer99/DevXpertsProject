export enum typeOffer {
    stage,job
  }
export class Offer {
    id!:number;
    description!:string;
    lastDateApplication!:Date;
    nbrCandidature!:number;
    file!:File;
    exibitorId!:number;
    offer!:typeOffer
}
