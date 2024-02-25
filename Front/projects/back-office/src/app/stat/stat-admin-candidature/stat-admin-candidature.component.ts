import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { CandidatureService } from 'src/app/services/candidature.service';

export type chartOptions_disque = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-stat-admin-candidature',
  templateUrl: './stat-admin-candidature.component.html',
  styleUrls: ['./stat-admin-candidature.component.css']
})
export class StatAdminCandidatureComponent implements OnInit{

  constructor(private candidatureService:CandidatureService){}

  public chartOptions_disque:any;
  nbrStatus!:any;
  
  ngOnInit(): void {

    this.getNbrStatus();
    
  }

  getNbrStatus(){

    this.candidatureService.getNbrStatusApplication().subscribe((res)=>{
      this.nbrStatus= res;

     const labels = this.nbrStatus.map((item: any[]) => item[0]);
     const data = this.nbrStatus.map((item: any[]) => item[1]);

      this.chartOptions_disque = {
        /*colors : ['#0100c4','#FF0000'],

      series: [
        {
          name: "Disque utilisé",
          data: [0,],
        },
        {
          name: "Limite",
          //data: [this.serveurs[0].disque_totale,]
          data: [0,1,2]
        },
        
      ],
      chart: {
        height: 300,
        type: "line",
        zoom: {
          enabled: true
        }
        
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Utilisation du disque au cours du temps de: ",//+this.serveurs[0].nom_serveur,
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [0,],
        labels: {
          show: false
        },
      },*/
      //series: [this.nbrStatus[1],],
      series: data,
      chart: {
        type: "donut",
        width: 390
      },
      labels: ["In progress","Accepted","Refused"],//labels,
      colors: ["#F6B600", "#08CC0A", "#FF0000"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    
    };

    })

  }

}
