import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as highcharts from 'angular-highcharts';
import { EventService } from '../../../services/event.service';
import { Event, InterestedBy } from '../../../models/event';
import { ChartserviceService } from '../../../services/chartservice.service';

@Component({
  selector: 'app-events-stats',
  templateUrl: './events-stats.component.html',
  styleUrls: ['./events-stats.component.css']
})
export class EventsStatsComponent implements OnInit{
  eventList:Event[]=[]
  createseries:any;
  interestedBys:InterestedBy[]=[]
  interestnumbers:string[]=[]
  interestdata:number[][]=[]
  interestCountMap = new Map<string, number>()
  interestDataCounter: (string |number )[][]=[[], []];
  
  constructor(private eventService:EventService,private chartservice:ChartserviceService){}
  
  chart = new highcharts.Chart({
    
  });
  ngOnInit(): void {
    this.fetchEvents();
  }
 
 
  
  updateChart(){
     this.chart= this.chartservice.ChartRecreate(this.chart,'line',this.interestDataCounter[1],"mychart",
      this.interestDataCounter
      ) 
    
  }
  chartrecreate(){
    this.chart = new highcharts.Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      xAxis: {
        categories: ['meh']
    },
      credits: {
        enabled: false
      },
      series: []
    });
  }

  fetchEvents(){
    this.eventService.getAllEvents().subscribe((data)=>
      {
        this.eventList=data;
        this.createseries={type:'bar'}
        console.log(this.eventList)
      }
    )
  }

  populateEmptyfield(){
    for (let i = 0; i < this.interestDataCounter.length; i++) {
      for (let j = 0; j < this.interestDataCounter[i].length; j++) {
        if (this.interestDataCounter[i][j] === undefined || this.interestDataCounter[i][j] === null || this.interestDataCounter[i][j] === '') {
          this.interestDataCounter[i][j] = 0;
        }
      }
    }
  }
  removeEmptyField() {
    let indexesToRemove: number[] = [];
    let allZeros :boolean
    // Iterate through the columns (starting from the third column)
    console.log(this.interestDataCounter[1].length)
    for (let j = 0; j < this.interestDataCounter.length; j++) {
       allZeros = true;
      console.log(this.interestDataCounter.length)
      // Check each row in the current column
      for (let i = 2; i < this.interestDataCounter[1].length; i++)
        {

        
        if (this.interestDataCounter[i][j] !== 0) {
          allZeros = false;

        }
       
      }
      if (allZeros ) {
        indexesToRemove.push(j);
      }
      // If all values in the column are zero, mark it for removal
      
    }
  
    console.log("INDEXES TO REMOVE")
    console.log(indexesToRemove)
    // Remove the marked columns
    for (let k = indexesToRemove.length - 1; k >= 0; k--) {
      const indexToRemove = indexesToRemove[k];
      this.interestDataCounter[1].splice(indexToRemove, 1); // Remove from the header row
     // this.interestDataCounter[].splice(indexToRemove, 1);
      // Remove the entire column from each row
      for (let l = 0; l < this.interestDataCounter.length; l++) {
        this.interestDataCounter[l].splice(indexToRemove, 1);
      }
    }
  }
  
  sortData() {
    for (let i = 0; i < this.interestDataCounter[1].length; i++) {
      for (let j = 0; j < this.interestDataCounter[1].length - 1; j++) {
        // Compare adjacent elements and swap if they are in the wrong order
        if ((this.interestDataCounter[1][j] as string).localeCompare((this.interestDataCounter[1][j + 1] as string)) > 0) {
          const temp = this.interestDataCounter[1][j];
          this.interestDataCounter[1][j] = this.interestDataCounter[1][j + 1];
          this.interestDataCounter[1][j + 1] = temp;
          for (let k=2;k<this.interestDataCounter.length;k++)
          {
            const temp2 = this.interestDataCounter[k][j];
          this.interestDataCounter[k][j] = this.interestDataCounter[k][j + 1];
          this.interestDataCounter[k][j + 1] = temp2;
          }
        }
      }
    }
  }

  // Helper function to compare strings numerically
  

  countInterestedByPerDay(Event: Event) {
 
    this.interestedBys!=Event.interestedBys
    const eventIndex=this.interestDataCounter[0].indexOf(Event.name);
    // Iterate through each InterestedBy
    this.interestDataCounter[eventIndex+2]=[];
    for (const interestedBy of Event.interestedBys!) {
      // Get the date string in the format YYYY-MM-DD
  
      const dateString = interestedBy.timestamp.toLocaleString().split('T')[0]
      console.log(dateString) 
      let index = this.interestDataCounter[1].indexOf(interestedBy.timestamp.toLocaleString().split('T')[0]);
      
      // Update the count in the map
      if (index !== -1) {
        this.interestDataCounter[eventIndex+2][index]=+this.interestDataCounter[eventIndex+2][index]+1;
      } else {
        this.interestDataCounter[1].push(dateString);
        index = this.interestDataCounter[1].indexOf(dateString);
        this.interestDataCounter[eventIndex+2][index]=1;
      }
    }
    this.sortData()
    this.populateEmptyfield()
  }
  handleCheckboxChange(event:Event ): void {
    const index = this.interestDataCounter[0].indexOf(event.name);
    const eventId=event.name;
  
      // If checked, add event ID to the array
      if (index === -1) {
        this.interestDataCounter[0].push(eventId);
        this.countInterestedByPerDay(event)
      
    } else {
      // If unchecked, remove event ID and all numbers to the right
      if (index !== -1) {
        this.interestDataCounter[0].splice(index, 1);
        this.interestDataCounter.splice(index+2,1);
        console.log("THIS IS THE LIST WITH REMOVED ITEMS")
        console.log(this.interestDataCounter)
        this.removeEmptyField()
        
      }
    }
    this.updateChart()
    console.log(this.interestDataCounter);
  }
}
