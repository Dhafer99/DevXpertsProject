import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient : Stomp.Client;
  private stompClient2 : Stomp.Client;


  private rouletteSubject : Subject<any> = new Subject<any>()

  private startRouletteSubject :  Subject<any> = new Subject<any>()
  private listSubject = new BehaviorSubject<any[]>([]);

  getListObservable() {
    return this.listSubject.asObservable();
  }
  addElementToList(newElement: any) {
    // Get the current value of the list
    const currentList = this.listSubject.getValue();

    // Modify the list by adding the new element
    const updatedList = [...currentList, newElement];

    // Update the BehaviorSubject with the modified list
    this.listSubject.next(updatedList);
  }

  updateList(newList: any[]) {
    this.listSubject.next(newList);
  }
  public connectToRouletteSocket(roomId:number) {
    const socket = new SockJS('http://localhost:8083/socket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, frame => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/rouletteResult', message => {
        console.log('Received: ' + message.body);
        const messageObject = JSON.parse(message.body)
        this.rouletteSubject.next(messageObject);
       
        this.addElementToList(messageObject.body.result)
 
      
      
      });
      this.getResults(roomId)
      console.log("ROOM ID inside CONNECT ")
      console.log(roomId);
     
    });
    
  }

  public connectToStartRouletteSocket() {
    const socket = new SockJS('http://localhost:8083/socket');
    this.stompClient2 = Stomp.over(socket);
    this.stompClient2.connect({}, frame => {
      console.log('Connected: ' + frame);
      this.stompClient2.subscribe('/test/startroulette', message => {
        console.log('START ROULETTE MESSAGE: ' + message.body);
        const messageObject = JSON.parse(message.body)
        this.startRouletteSubject.next(messageObject);

      });
    
    
     
    });
  }

  public getResults(roomId:number){
    this.stompClient.send(`/startRoulette/${roomId}`)
  }
 public startRoulette(){
    this.stompClient2.send(`/eyaharfa`)
  }
  public getStartRouletteSubject(): Subject<any> {
    return this.startRouletteSubject ;
  }
public getMessageSubject(): Subject<any> {
  return this.rouletteSubject ;
}


}
