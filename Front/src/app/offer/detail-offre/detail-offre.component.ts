import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit{
  offer!:Offer[];
   id=0
  constructor(private activateroute:ActivatedRoute,private offerService:OfferService){
  }
  ngOnInit(): void {
    this.id=this.activateroute.snapshot.params['id']
  }
  getOfferById(): void {
  this.offerService.getOfferById(this.id).subscribe((data)=>{
    console.log("HHHH"+JSON.stringify(data))
  this.offer=data
  console.log("mylist:"+JSON.stringify(this.offer))
    })
  }

}
