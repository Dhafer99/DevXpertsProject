import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { Router } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
  post: Post = new Post();
  submitted=false;
  
  constructor(
    private service:ForumService,
    private router :Router
    ){}

  ngOnInit(): void {
  }

  savePost(){
    this.service.addPost(this.post).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/forum']);
    },
    error => console.log(error));
  }

  
  /*goToPostList(){
    this.router.navigate(['/forum']);
  }
 
  onSubmit(){
    console.log(this.post);
    this.savePost ();
  }*/
  


}
