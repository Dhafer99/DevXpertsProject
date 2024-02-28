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
import { OfferService } from 'src/app/services/offer.service';

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

  constructor(private candidatureService:CandidatureService,private offreService:OfferService){}

  public chartOptions_status:any;
  public chartOptions_year:any;
  public chartOptions_type:any;
  nbrStatus!:any;
  nbrApplicationMounth!:any;
  nbrOffersByType!:any;
  year!:string;
  currentYear!:string
  
  ngOnInit(): void {

    const currentDate = new Date(); // Obtenez la date courante
    this.currentYear = currentDate.getFullYear().toString();
    this.getNbrStatus();
    this.getNbrApplicationsMounth(this.currentYear);
    this.getCountOffersByType();
    
  }

  getNbrStatus(){

    this.candidatureService.getNbrStatusApplication().subscribe((res)=>{
      this.nbrStatus= res;

     const labels = this.nbrStatus.map((item: any[]) => item[0]);
     const data = this.nbrStatus.map((item: any[]) => item[1]);

      this.chartOptions_status = {
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
  getNbrApplicationsMounth(annee : string){
    this.candidatureService.getNbrApplicationsByMonth(annee).subscribe((res) =>{
      this.nbrApplicationMounth=res;
      console.log(JSON.stringify(this.nbrApplicationMounth))
      const labels = this.nbrApplicationMounth.map((item: any[]) => item[0].toString());
      const data = this.nbrApplicationMounth.map((item: any[]) => item[1]);
      console.log("AAAAAA"+labels)
      this.chartOptions_year = {
              series: [{
          name: 'Applications',
          data: data
        }],
        chart: {
          type: 'bar',
          width: 390
        },
        xaxis: {
          categories: labels // Labels for x-axis
        },
        colors: ["#0000FF", "#08CC0A", "#FF0000"],
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
      }
  })
    
  }

  selectType(event : any):void{
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    this.year = selectedValue;
    console.log("Année selectionnée : "+this.year);
    this.getNbrApplicationsMounth(this.year);
  }

  getCountOffersByType(){
    this.offreService.getCountOffersByType().subscribe((res) => {
  this.nbrOffersByType = res;

  const labels = this.nbrOffersByType.map((item: any[]) => item[0]);
  const data = this.nbrOffersByType.map((item: any[]) => item[1]);

  this.chartOptions_type = {
    series: data,
    chart: {
      type: "pie", // Mettez à jour le type de graphique en "pie"
      width: 370
    },
    labels: labels,
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
});
  }

}
