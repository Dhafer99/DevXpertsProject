import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { EventService } from '../../services/event.service';
import { Event, Presence } from '../../models/event';

@Component({
  selector: 'app-scan-pressence',
  templateUrl: './scan-pressence.component.html',
  styleUrls: ['./scan-pressence.component.css']
})
export class ScanPressenceComponent implements OnInit{
  currentEvent:Event
  lastaddedPresence!:Presence
  lastScannedid:number=0
  constructor(
    private acr:ActivatedRoute,
    private eventService:EventService
    ){}
  ngOnInit(): void {
    this.acr.params.subscribe((params)=>{

      this.eventService.fetchEvent(params['id']).subscribe((data)=>{
        this.currentEvent=data;
        console.log(this.currentEvent)
      })
    })
  }
  currentDevice: MediaDeviceInfo = null;
formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];
  onScanSuccess(result: string): void {
    const jsonObject = JSON.parse(result);
   
    let presense :Presence=new Presence();
    
    if (this.lastScannedid!=jsonObject.id)
    {
      this.lastScannedid = jsonObject.id;
    presense.userId=this.lastScannedid;
    presense.date=new Date();
    presense.eventId=this.currentEvent.id;
      this.eventService.addPresense(this.currentEvent.id,presense).subscribe((data)=>
      {
        if (this.currentEvent.presences.indexOf(data) ==-1)
        {
          this.currentEvent.presences.push(data);
        }
        this.lastaddedPresence=data
        console.log(data)
      })
    }
    else{
      //sameId()
    }
  }


  fetchEvent(){

  }
}
