import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post';
import { ForumService } from '../../services/forum.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  post: Post = new Post();
  selectedFile! : File;
  //selectedVideo!: Video;

  constructor(
    private service:ForumService,
    private router :Router,
    private http: HttpClient,
    private dialogRef: MatDialogRef<PostFormComponent>,
    private datePipe: DatePipe
    ){}

    ngOnInit(): void {
    }

    onFileSelected(event:any){
      this.selectedFile = event.target.files[0];
    }
  
   /* savePost(){
      const formData = new FormData();
      formData.append('file',this.selectedFile);
      formData.append('title',this.post.title);
      formData.append('descriptionSubject',this.post.descriptionSubject);
      
      this.http.post('http://localhost:8040/api/Posts/add-post', formData)
      .subscribe( response =>{
        console.log('Post saved successfully:', response);
        this.router.navigate(['/post-list']);
        this.dialogRef.close();
      },
      error => console.log('Error saving post:', error));
    }*/
 
    savePost() {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      
      formData.append('title', this.post.title);
      formData.append('descriptionSubject', this.post.descriptionSubject);
     
      this.http.post<Post>('http://localhost:8222/api/Posts/add-post', formData)
        .subscribe(response => {
          console.log('Post saved successfully:', response);
          // Navigate to the same route to reload the page
     //     this.myEvent.emit(response)
         window.location.reload();
          this.dialogRef.close();
        },
        error => console.log('Error saving post:', error));
    }

}
