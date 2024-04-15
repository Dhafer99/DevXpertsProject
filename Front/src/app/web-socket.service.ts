import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('http://localhost:8222/ws');
  }

  startRoulette() {
    this.socket$.next('/api/rooms/app/startRoulette');
  }

  getRouletteResult() {
    return this.socket$.asObservable();
  }
}
