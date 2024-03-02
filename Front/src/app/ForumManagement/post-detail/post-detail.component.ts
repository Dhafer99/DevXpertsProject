import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { ForumService } from 'src/app/services/forum.service';
import { Comment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post$!:Observable<Post>;
  comment: Comment = new Comment();
  comments!: Comment[];
  commentSubjectId!: number;
  global = true;
  showComments = false;
  postId: number;


  constructor(
    private router: ActivatedRoute,
    private service: ForumService
  ){this.postId = this.router.snapshot.params['id'];}

  ngOnInit() {
    this.getPost();
  }

  getPost(): void{
    const IdPost = +this.router.snapshot.paramMap.get('id')!;
    console.log("IdPost"+ IdPost);
    this.post$=this.service.getPost(IdPost);
  }

  addComment() {
    this.service.addComment(this.comment, this.postId).subscribe(
      (data: Comment) => {
        console.log('Comment added successfully:', data);
        // Optionally, reset the comment form or do other operations after adding the comment
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }

  public getCommentsBySubject(subjectId: number): void {
    this.commentSubjectId = subjectId;
    this.service.getComments(subjectId).subscribe(
      (response: Comment[]) => {
        this.comments = response;
        console.log(this.comments);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.showComments = true;
    this.global = false;
  }

  public DeleteComment(idComment: number): void {
    this.service.deleteComment(idComment).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommentsBySubject(this.commentSubjectId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
