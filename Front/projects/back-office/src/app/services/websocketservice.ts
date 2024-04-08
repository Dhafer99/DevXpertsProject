import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public stompClient : Stomp.Client;



  public connect() {
    const socket = new SockJS('http://localhost:8763/socket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, frame => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/socket/notification/test', message => {
        console.log('Received: ' + message.body);
      });
    });
  }
  public connectToChat() {
    const socket = new SockJS('http://localhost:8763/socket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, frame => {
      console.log('Connected: HEEEEE' + frame);
    //  this.stompClient.subscribe('/topic/public', message => {
    //    console.log('Received: ' + message.body);
     // });
    });
  }

  public sendName(name: string) {
    this.stompClient.send('/app/hello', {}, name);
  }
  public sendMessage(message: message) {
    const encodedMessage = JSON.stringify(message);
   
    this.stompClient.send(`/chat/sendMessage/${message.sender.id}/${message.receiver.id}`,{},message.content);
  }
}
