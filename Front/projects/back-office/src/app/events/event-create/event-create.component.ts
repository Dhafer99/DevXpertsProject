import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  @Input () x!:string;
  id:any; 
  myform!:FormGroup;

  constructor(private router: Router,private acr:ActivatedRoute) {}
  ngOnInit(): void {
    this.id=this.acr.snapshot.params["id"];  
    this.myform=new FormGroup({
      type:new FormControl('',[Validators.required]),
      name:new FormControl ('',[Validators.required,Validators.minLength(6)]),
      date:new FormControl('',[Validators.required]),
      disableDate:new FormControl('',[Validators.required]),
      
    })
    throw new Error('Method not implemented.');
  }


  goToEventDisplay() {
    this.router.navigate(['/events/display']);
  }
}
