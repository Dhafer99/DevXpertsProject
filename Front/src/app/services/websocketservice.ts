import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject, Observable, Subject, interval, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient : Stomp.Client;
  private stompClient2 : Stomp.Client;
 // return this.http.get<any>( `${ this.url }${ id }`, {
   
 // } );
  private apiUrl = 'http://localhost:8222/api/rooms/SendRandomIndex/';
  private apiUrlls = 'http://localhost:8222/api/rooms/GetRandomIndex';

  constructor(private http: HttpClient) { }
   getDataPolling(intervalTime: number , roomId : number): Observable<string> {
    return interval(intervalTime).pipe(
      switchMap(() => 
      
     
      this.http.get<string>( `${ this.apiUrlls }`))
      
    )
    ;
  } 


  saveRandomNumber( roomId : number): Observable<any> {
    return this.http.put<any>( `${ this.apiUrl }${ roomId }`,{})
    ;}

    GetRandomIndex(): Observable<any> {
      return this.http.get<any>( `${ this.apiUrlls }`)
      ;}
    
  private rouletteSubject : Subject<any> = new Subject<any>()

  private startRouletteSubject :  Subject<any> = new Subject<any>()
  private listSubject = new BehaviorSubject<any[]>([]);

  
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