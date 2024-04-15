import { supplierUser } from "./SupplierUser"
import { User } from "./user"

export class message{

    content:string 
    receiverFK: number
    senderFK: number
    createdAt:string

    constructor(content: string, sender: number, receiver: number) {
        this.content = content;
        this.senderFK = sender;
        this.receiverFK = receiver;
    }
}