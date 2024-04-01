import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment, Comments, Rating } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{

  @Input() comments:Comments[]
  @Input() previousComment:Comment
  replying:boolean=false;
  commenting=false
  // paladin user
  userID=1;
  currentComment:Comment
  myform!:FormGroup;

  constructor(private eventService:EventServiceService){ 
  }

  ngOnInit(): void {
    this.myform=new FormGroup({
      eventID:new FormControl(this.previousComment.eventID),
      comment:new FormControl(''),
      level:new FormControl(this.previousComment.level+1),
      thread:new FormControl(this.previousComment.id),
      userID: new FormControl(this.userID),
    id:new FormControl(0),
    status:new FormControl('Accepted')
    })

  }
  reply(){
    this.replying=!this.replying;
    console.log("Started")
  }
  sendReply(comment:Comments){
    this.eventService.addComment(this.myform.value).subscribe((data)=>{
      let mockcomments=new Comments();
      mockcomments.comment=data
      mockcomments.list=[]
      mockcomments.level=data.level
        comment.list.push(mockcomments);
    });
  }
}
