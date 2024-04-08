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
  CurrentUser:User = {
    id: 2,
    nom : "dhafer entreprises",
    numeroTelephone : "9999999"
  }
  secondUser:User = {
    id: 3,
    nom : "hamma",
    numeroTelephone : "9999999"
  }
  thirdUser:User = {
    id: 4,
    nom : "hamma",
    numeroTelephone : "9999999"
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
    this.messages.push({ content: this.newMessage, sender: this.CurrentUser ,receiver: this.secondUser});
      this.messages.push({ content: this.newMessage, sender: this.secondUser ,receiver: this.CurrentUser});
      const sentmessage={ content: this.newMessage, sender: this.CurrentUser ,receiver: this.secondUser}
    this.chatSocket.sendMessage(sentmessage);

    this.chatSocket.stompClient.subscribe('/topic/public', (message :any) => {
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
     // console.log(message.body.sender.id)
    });
      // Code to send message to the backend or perform any other actions
      this.newMessage = '';
    }
  }
  loadConversation(senderId:number,ReceiverId:number){
   
    this.ReceiverId = ReceiverId; // loads the receiver id you're going to send a message to 
   this.messages = []
   this.messages.push({ content: "third conversation", sender: this.CurrentUser ,receiver: this.thirdUser});
   this.messages.push({ content: "second conversation", sender: this.CurrentUser ,receiver: this.secondUser});
   this.messages = this.messages.filter((message) => message.sender.id === senderId && message.receiver.id === ReceiverId);
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
  constructor(private serviceback:ServicebackService ,private acr:ActivatedRoute,private renderer: Renderer2,private chatSocket:WebSocketService){}
  ngOnInit(): void {


      /////Socket 
      this.chatSocket.connectToChat();
     









    $( '.friend-drawer--onhover' ).on( 'click',  function() {
  
      $( '.chat-bubble' ).hide('slow').show('slow');
      
    });
   
    this.serviceback.getsupplier().subscribe((data:Supplier[])=>{
      this.SupplyRequestList=data
    
  
  
  this.acr.params.subscribe((params)=>{
    this.serviceback.getsupplierItemById(params['id']).subscribe((data)=>{
      console.log(params['id'])
      console.log(data)
     this.supplyRequest= data;
     this.serviceback.getSuppliersOffers(params['id']).subscribe((data:User[])=>{
      this.Suppliers=data ;
      console.log(data);
    })
    
    })
    this.serviceback.getAllOfferForSupplyRequest(params['id']).subscribe((data:SupplierOffer[])=>{
      this.SupplyOffer=data ;
      console.log("SUPPLIER OFFER DATA :")
      console.log(data);
      
    })
  });
  })
  }
  SupplyRequestList : Supplier[]=[]
}
