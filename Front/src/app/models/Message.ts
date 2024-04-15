import { supplierUser } from "./SupplierUser"
import { User } from "./user"

export class message{

    content:string 
    receiverFK: number
    senderFK: number
    createdAt:string

    constructor(content: string, senderFK: number, receiverFK: number) {
        this.content = content;
        this.senderFK = senderFK;
        this.receiverFK = receiverFK;
    }
}