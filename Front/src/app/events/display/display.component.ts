import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Interested } from 'src/app/models/Interested';
import { Comment, Comments, Event } from 'src/app/models/event';
import { Image } from 'src/app/models/image';
import { EventServiceService } from 'src/app/services/event-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  comments:Comments[]
  rate:any
  event: Event = new Event;
  eventImages: Event = new Event;

  idUser:any=1
  myform!:FormGroup;
  commentForm!:FormGroup;
  interested:boolean=false;
  interestedBy!:Interested
  localImage:Image[]=[]
  constructor( 
    private router: Router,
    private acr: ActivatedRoute,
    private eventService: EventServiceService,
    )
    {}

  ngOnInit(): void {
    this.myform=new FormGroup({
      rating:new FormControl(0),
      userID: new FormControl(0),
    eventID: new FormControl(0),
    id:new FormControl(0),
    status:new FormControl('Accepted')
    })
    this.commentForm=new FormGroup({
      comment:new FormControl(''),
      userID: new FormControl(0),
    eventID: new FormControl(0),
    id:new FormControl(0),
    status:new FormControl('Accepted')
    })
    this.acr.params.subscribe(params => {
      this.fetchEvent(params['name']);

    })
   
    
  }

    fetchEvent(name:string){
      this.event.name=name 
      this.eventService.fetchEventByName(this.event.name).subscribe((result)=> {
        this.event= result;
        this.eventImages=result;
        this.commentForm.get('eventID').setValue(this.event.id);
        this.commentForm.get('userID').setValue(this.idUser);
        this.fetchComment();
       const rate= this.event.ratings?.find((rate)=>rate.userID==this.idUser) ||undefined

        this.myform.setValue({
          userID:this.idUser,
          eventID:this.event.id,
          status:rate?.status || 'Accepted',
          rating:rate?.rating ||0,
          id:rate?.id ||0
        })
        console.log(this.myform.value)
        
        if (this.event.interesteds){
          this.event.interesteds.forEach(intreted => {
            if (intreted.userID==this.idUser)
            {
            
              this.interested=true;
             this.interestedBy=intreted
              
            }
          });
        }
        console.log(this.event)
        console.log(this.interested)
      })
  
    }
    fetchComment(){
      this.eventService.getEventComment(this.event.id).subscribe((data)=>{
        this.comments= this.eventService.orderComments(data);
      })
    }
    add() {
      this.myform.get('userID').setValue(this.idUser);
      this.myform.get('eventID').setValue(this.event.id);
      console.log(this.myform.value)
        this.eventService
        .addRating(this.myform.value)
        .subscribe((response) => {
          this.event=response
        });
      }
      
    addInterest(){
      console.log("")
      this.eventService.addInterest(this.idUser,this.event.id).subscribe((data)=>
    {
      this.event.interestedCounter+=1
      this.interestedBy=data;
      this.event.interesteds?.push(this.interestedBy);
      this.interested=true;

    }
        );
        console.log(this.event.interesteds)
   
   
    }
    removeInterest(){
      console.log("")
      this.eventService.deleteInterest(this.interestedBy).subscribe((data)=>
      {
        
        
        this.event.interesteds=data.interesteds
        this.event.interestedCounter=data.interestedCounter
        this.interested=false;
      }
      );
      
      console.log("Removed Interest")
    }

    firstComment(){
      console.log("answer cliked")
      console.log(this.commentForm.value)
      this.eventService.addCommentFirst(this.commentForm.value).subscribe((data)=>{
        console.log(data)
        this.comments=this.eventService.orderComments(data);
      })
    }

    }

