import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient : Stomp.Client;



  public connect() {
    const socket = new SockJS('http://localhost:8763/socket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, frame => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/socket/notification', message => {
        console.log('Received: ' + message.body);
      });
    });
  }

  public sendName(name: string) {
    this.stompClient.send('/app/hello', {}, name);
  }
}
