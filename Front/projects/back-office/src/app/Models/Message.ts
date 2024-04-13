import { User } from "./User"

export class message{

    content:string 
    receiver: User
    sender: User

    constructor(content: string, sender: User, receiver: User) {
        this.content = content;
        this.sender = sender;
        this.receiver = receiver;
    }
}