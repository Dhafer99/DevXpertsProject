import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ForumService} from '../forum.service';
import {Post} from '../models/post';
import {Comment} from '../models/comment';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
posts! : Post[];
comments! : Comment[];

  constructor(
    private router: Router,
    private service: ForumService, 
  ){}

  ngOnInit(): void {
   this.getPosts();
  }

  private getPosts(){
    this.service.getPostsList().subscribe (
      (response: Post[]) => {
        console.log("salma 1" + response);
        this.posts = response;
        console.log("salma 2" + this.posts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 
  onClaimClick(){
    this.router.navigateByUrl('/claim');
  }
 
  
}
