import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  template: `
 
`,
styles: [`
  .countdown-container {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }
`]
})
export class CountdownComponentComponent implements OnInit {
  countdownConfig = {leftTime: this.calculateTimeDifference(),
  demand: true,
  format: 'hh:mm:ss'
};

ngOnInit(): void {
  this.countdownConfig.leftTime = this.calculateTimeDifference();
}

private calculateTimeDifference(): number {
  // Remplacez `yourStartDate` par la date de début de l'enchère au format JavaScript Date
  const yourStartDate: Date = new Date('2024-02-28T22:11:00');
  const currentTime: Date = new Date();
  return Math.max(0, Math.floor((yourStartDate.getTime() - currentTime.getTime()) / 1000));
}

handleCountdownEvent(event: any): void {
  if (event.action === 'done') {
    // Le compte à rebours est terminé, vous pouvez exécuter une action ici
    console.log('Le compte à rebours est terminé.');
  }
}
}