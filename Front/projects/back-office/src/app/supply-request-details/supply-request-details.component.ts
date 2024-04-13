import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../models/Supplier';
import { ServicebackService } from '../services/serviceback.service';
import { SupplyRequest } from '../models/SupplyRequest';
import { User } from '../models/User';
import { SupplierOffer } from '../models/SupplierOffer';
import $ from 'jquery';
import { message } from '../models/Message';
import { WebSocketService } from '../services/websocketservice';
@Component({
  selector: 'app-supply-request-details',
  templateUrl: './supply-request-details.component.html',
  styleUrls: ['./supply-request-details.component.scss']
})
export class SupplyRequestDetailsComponent implements OnInit {
  


  ReceiverId : number ;
  messages: message[] = [];
  newMessage: string = '';
UsersList : User[]=[
{ id: 1 ,nom:"dhafer",numeroTelephone : "5520278"},
{ id: 2 ,nom:"hamma",numeroTelephone : "7897845"},
{ id: 3 ,nom:"ahmed",numeroTelephone : "4564524"},
{ id: 4 ,nom:"salah",numeroTelephone : "1234567"}


] ;
  sender:User = {
    id: 0,
    nom : "",
    numeroTelephone : ""
  }
  receiver:User = {
    id: 0,
    nom : "",
    numeroTelephone : ""
  }
 
  sentMessage : message ={
    content:"",
    sender: new User,
    receiver:new User
  }
  messagecomingfromsocket: message = {

    content :"",
    sender:new User,
    receiver: new User
   }
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Assuming this.userID and this.ReceiverId are properly assigned
      var userIDString = localStorage.getItem("userID");
      this.userID = parseInt(userIDString, 10);
      console.log("current user id")
      console.log(this.userID);
      const testmessage = this.newMessage;
  
  
      this.serviceback.getSupplierById(this.userID).subscribe((senderData: User) => {
        console.log("senderDATA")
        console.log(senderData);
        this.sender = senderData;
      
  
        
       // Assuming this.receiver is properly assigned
       this.serviceback.getSupplierById(this.ReceiverId).subscribe((receiverData: User) => {
        this.receiver = receiverData;
       

        // Construct the message object here
        const willbesent = new message(testmessage, this.sender, this.receiver);
        
        // Assuming sendMessage is a method that sends the message
        this.chatSocket.sendMessage(willbesent);
     
       // this.messages.push(willbesent)
      });

       
      });


    

   /* this.chatSocket.stompClient.subscribe('/topic/public', (message :any) => {
      console.log('SENDER: ' + message.body);
      const messageObject = JSON.parse(message.body);
      const senderId = messageObject.sender.id;
  const senderName = messageObject.sender.nom;
  const senderPhoneNumber = messageObject.sender.numeroTelephone;

  const receiverId = messageObject.receiver.id;
  const receiverName = messageObject.receiver.nom;
  const receiverPhonenumber = messageObject.receiver.numeroTelephone;

  console.log('Sender ID:', senderId);
  console.log('Sender Name:', senderName);
  console.log('Sender Phone Number:', senderPhoneNumber);
  
  console.log('receiver ID:', receiverId);
  console.log('receiver Name:', receiverName);
  console.log('receiver Phone Number:', receiverPhonenumber);

  const containingmessage = messageObject.content
  this.messagecomingfromsocket = {content:containingmessage,sender:messageObject.sender,receiver:messageObject.receiver}
 
     // console.log(message.body.sender.id)
    });*/
    //this.messages.push(this.messagecomingfromsocket)
      // Code to send message to the backend or perform any other actions
      this.newMessage = '';
    }
  }
  loadConversation(senderId:number,receiverid:number){
   
    this.ReceiverId = receiverid; // loads the receiver id you're going to send a message to 

   
   //this.messages = [] // this has to be become a get request from DB
   var userIDString = localStorage.getItem("userID");
   this.userID = parseInt(userIDString, 10);
   this.serviceback.getAllMessages(this.userID,this.ReceiverId).subscribe((data:message[])=>{

    this.messages=data ;
    console.log(data);
   });
   //this.messages.push({ content: "third conversation", sender: this.sender ,receiver: this.thirdUser});
  // this.messages.push({ content: "second conversation", sender: this.sender ,receiver: this.secondUser});
  // this.messages = this.messages.filter((message) => message.sender.id === senderId && message.receiver.id === receiverid);
    console.log("MESSAGES")
    console.log(this.messages)
  }

  addChatTemplate(supplierid:number) {
   // Create the chat template element
   const chatTemplate = this.renderer.createElement('div');
   this.renderer.addClass(chatTemplate, 'friend-drawer');
   this.renderer.addClass(chatTemplate, 'friend-drawer--onhover');

   // Create the img element
   const imgElement = this.renderer.createElement('img');
   this.renderer.addClass(imgElement, 'profile-image');
   this.renderer.setAttribute(imgElement, 'src', 'https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg');
   this.renderer.setAttribute(imgElement, 'alt', '');

   // Append the img element to the chat template
   this.renderer.appendChild(chatTemplate, imgElement);

   // Create the div.text element
   const textElement = this.renderer.createElement('div');
   this.renderer.addClass(textElement, 'text');
   textElement.innerHTML = `
       <h6>Robo Cop</h6>
       <p class="text-muted">Hey, you're arrested!</p>
   `;

   // Append the text element to the chat template
   this.renderer.appendChild(chatTemplate, textElement);

   // Create the span.time element
   const timeElement = this.renderer.createElement('span');
   this.renderer.addClass(timeElement, 'time');
   this.renderer.addClass(timeElement, 'text-muted');
   this.renderer.addClass(timeElement, 'small');
   timeElement.textContent = '13:21';

   // Append the time element to the chat template
   this.renderer.appendChild(chatTemplate, timeElement);

   // Append the chat template to the chat container
   const chatContainer = document.getElementById('chat-container');
   this.renderer.appendChild(chatContainer, chatTemplate);
  }

  addUserToList(supplierId: number)
{
  this.UsersList.push({ id : 2,nom:"TAHER",numeroTelephone :"123456789"})

}
  supplyRequest: SupplyRequest = {
    id:0,
    requirement:'String',
    quantity: 0 ,
    price: 0 ,
    boothPosition: 'String' ,
    productname: 'String' ,
    servicename: 'String' ,
    type : 'String' ,
    status :'String' ,
   
   image:null
}
Suppliers : User[]=[];
SupplyOffer : SupplierOffer[]=[];
userID: number ;
  constructor(private serviceback:ServicebackService ,private acr:ActivatedRoute,private renderer: Renderer2,private chatSocket:WebSocketService){}
  ngOnInit(): void {

    this.serviceback.getAllUserSuppliers().subscribe((data:User[])=>{
      this.UsersList = data ;
    })

  
   

      /////Socket 
      this.chatSocket.connectToChat();
      //message 
      this.chatSocket.getMessageSubject().subscribe(messageObject => {
      //  console.log('Sender ID:', messageObject.sender.id);
       // console.log('Sender Name:', messageObject.sender.nom);
      //  console.log('Sender Phone Number:', messageObject.sender.numeroTelephone);
        
      //  console.log('Receiver ID:', messageObject.receiver.id);
      //  console.log('Receiver Name:', messageObject.receiver.nom);
      //  console.log('Receiver Phone Number:', messageObject.receiver.numeroTelephone);
        
         if ((messageObject.sender.id === this.userID && messageObject.receiver.id === this.ReceiverId) ||
        (messageObject.sender.id === this.ReceiverId && messageObject.receiver.id === this.userID)) {
        const containingmessage = messageObject.content;
        const parsedMessage = {
            content: containingmessage,
            sender: messageObject.sender,
            receiver: messageObject.receiver
        };
        this.messages.push(parsedMessage);
    }
      });
    









    $( '.friend-drawer--onhover' ).on( 'click',  function() {
  
      $( '.chat-bubble' ).hide('slow').show('slow');
      
    });
   
    this.serviceback.getsupplier().subscribe((data:Supplier[])=>{
      this.SupplyRequestList=data
    
  
  
  this.acr.params.subscribe((params)=>{
    this.serviceback.getsupplierItemById(params['id']).subscribe((data)=>{
    //  console.log(params['id'])
    //  console.log(data)
     this.supplyRequest= data;
     this.serviceback.getSuppliersOffers(params['id']).subscribe((data:User[])=>{
      this.Suppliers=data ;
   //   console.log(data);
    })
    
    })
    this.serviceback.getAllOfferForSupplyRequest(params['id']).subscribe((data:SupplierOffer[])=>{
      this.SupplyOffer=data ;
    //  console.log("SUPPLIER OFFER DATA :")
    //  console.log(data);
      
    })
  });
  })
  }
  SupplyRequestList : Supplier[]=[]
}
