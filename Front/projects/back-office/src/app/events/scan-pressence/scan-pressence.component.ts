import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-scan-pressence',
  templateUrl: './scan-pressence.component.html',
  styleUrls: ['./scan-pressence.component.css']
})
export class ScanPressenceComponent implements OnInit{
  currentEvent:Event
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
    console.log(result); // Handle the scanned QR code here
  }


  fetchEvent(){
    
  }
}
