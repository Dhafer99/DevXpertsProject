import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
  post: Post = new Post();
  selectedFile! : File;
  
  constructor(
    private service:ForumService,
    private router :Router,
    private http: HttpClient
    ){}

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }

  savePost(){
    const formData = new FormData();
    formData.append('file',this.selectedFile);
    formData.append('title',this.post.title);
    formData.append('descriptionSubject',this.post.descriptionSubject);
    
    this.http.post('http://localhost:8040/api/Posts/add-post', formData)
    .subscribe( response =>{
      console.log('Post saved successfully:', response);
      this.router.navigate(['/forum']);
    },
    error => console.log('Error saving post:', error));
  }

  
  /*goToPostList(){
    this.router.navigate(['/forum']);
  }
 
  onSubmit(){
    console.log(this.post);
    this.savePost ();
  }*/
  


}
