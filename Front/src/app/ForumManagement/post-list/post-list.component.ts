import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ForumService } from 'src/app/services/forum.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PostFormComponent } from 'src/app/ForumManagement/post-form/post-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild('confirmationDialog') confirmationDialog!: TemplateRef<any>;

  posts! : Post[];
  comments! : Comment[];
  closeResult!:string;
  form : boolean = false;
  
  @ViewChild('exampleModal') exampleModal: any;

  postToUpdate = {
    title:"",
    descriptionSubject:""
  }

  constructor(
    private router: Router,
    private service: ForumService,
    private matDialog:MatDialog,
    private modalService: NgbModal,
    
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

  navigateToPost(IdPost: number) { 
    this.router.navigate(['/post-detail/'+ IdPost]);
  }

  openDialog(){
    this.matDialog.open(PostFormComponent,{
      width: '50%',
      height: 'auto',
      maxWidth: '500px', // Limiting maximum width to avoid overly large dialogs on larger screens
      maxHeight: '100%', // Limiting maximum height to avoid overly tall dialogs
      autoFocus: false, // Disabling autofocus to prevent the first input field from being focused automatically
      panelClass: 'custom-dialog-container'
      })
  }

  deletePost(postId: number) {
    const dialogRef = this.modalService.open(this.confirmationDialog);
    dialogRef.result.then((result) => {
      if (result === 'confirm') {
        this.service.deletePost(postId).subscribe(() => this.getPosts());
      }
    }).catch((reason) => {
      console.log(`Dismissed with reason: ${reason}`);
    });
  }

 /* editPost(post : Post){
    this.service.updatePost(post).subscribe();
  }*/
  edit(post: any){
    this.postToUpdate = post;
   
  }



  updatePost(){
    this.service.updatePost1(this.postToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
      
    );
    this.exampleModal.hide();
  }
}
