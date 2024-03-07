import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { ForumService } from 'src/app/services/forum.service';
import { Comment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common'
import { DatePipe } from '@angular/common';;

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post!:Post;
  comment: Comment = new Comment();
  comments!: Comment[];
  commentSubjectId!: number;
  global = true;
  showComments = false;
  postId: number;
  textComment!:string;
  commentaire:string=''
  P!: Post;
  commentToUpdate!: Comment;

  constructor(
    private router: ActivatedRoute,
    private service: ForumService,
    private datePipe: DatePipe
  ){this.postId = this.router.snapshot.params['id'];}

  ngOnInit() {
    this.getPost();
    this.loadComments();
  }

  getPost(): void{
    const IdPost = +this.router.snapshot.paramMap.get('id')!;
    console.log("IdPost"+ IdPost);
   this.service.getPost(IdPost).subscribe((data)=>{
    this.post=data;
   });
  }

  /*addComment() {
    this.service.addComment(this.comment, this.postId).subscribe(
      (data: Comment) => {
        console.log('Comment added successfully:', data);
        // Optionally, reset the comment form or do other operations after adding the comment
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }*/

 /* addComment(): void {
    
    this.service.addComment(this.comment, this.postId)
      .subscribe(
        () => {
          console.log('comment added successfully');
          console.log(this.comment.textComment);
          this.textComment = '';
          location.reload(); 

        },
        error => console.log(error)
      );
  }*/
  addComment(): void {
    if (this.commentaire!='')
    {

      this.comment.textComment=this.commentaire
      
      // Set the dateCreationComment property to the current date
   // this.comment.dateCreationComment = this.datePipe.transform(new Date(), 'yyyy-MM-dd')!; // Format the date as needed


      this.service.addComment(this.comment, this.postId)
      .subscribe(
        (data) => {
          // location.reload(); 
          this.post.comment.push(data)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Comment added successfully",
            showConfirmButton: false,
            timer: 500
          });
          this.commentaire=''
        
        },
        error => console.log(error)
        );
      }
  }


 /* public getCommentsBySubject(subjectId: number): void {
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
  }*/

 /* public DeleteComment(idComment: number): void {
    this.service.deleteComment(idComment).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommentsBySubject(this.commentSubjectId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/

  loadComments(): void {
    this.service.getComments(this.postId).subscribe(
      (comments: Comment[]) => {
        this.comments = comments;
      },
      (error) => {
        console.error('Error loading comments:', error);
      }
    );
  }



  

// ...
deleteComment(commentId: number) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deleteComment(commentId).subscribe(
        () => {
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success"
          }).then(() => {
            this.loadComments(); 
            location.reload();// Reload posts after successful deletion
          });
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the post.",
            icon: "error"
          });
        }
      );
    }
  });
}
edit(comment: Comment, postId: number): void {
  // Copier l'objet post dans postToUpdate
  this.commentToUpdate = comment;
  console.log("Comment to update")
  console.log("mayssthis" + this.commentToUpdate)
  // Ouvrir une boîte de dialogue SweetAlert avec des champs d'entrée préremplis avec les informations existantes
  Swal.fire({
    title: 'Edit Comment',
    html:
      `<textarea id="description" class="swal2-textarea">${this.commentToUpdate.textComment}</textarea>`,
    showCancelButton: true,
    confirmButtonText: 'Update',
    cancelButtonText: 'Cancel',
    focusConfirm: false,
    preConfirm: () => {
      // Mettre à jour l'objet postToUpdate avec les informations éditées des champs d'entrée de la boîte de dialogue SweetAlert
      this.commentToUpdate.textComment = (<HTMLTextAreaElement>document.getElementById('description')).value;
      // Appeler la méthode updatePost avec le post mis à jour
      this.service.updateComment(this.commentToUpdate, postId).subscribe((resp: Comment) => {
        // Show success message using Swal
        Swal.fire({
          icon: 'success',
          title: 'Comment Updated Successfully!',
          text: 'Your changes have been saved.',
          confirmButtonText: 'OK'
        }).then(() => {
          // Optionally, you can perform additional actions after the user clicks "OK"
          // For example, you may want to refresh the list of posts
          this.loadComments();
        });
      },
      (err) => {
        // Show error message using Swal
        Swal.fire({
          icon: 'error',
          title: 'Error Updating Comment',
          text: 'An error occurred while updating the comment. Please try again later.',
          confirmButtonText: 'OK'
        });
        console.error('Error updating comment:', err);
      }
    );
    }
  });
}

public onLike(idPost: number): void {
  this.service.likePost(idPost).subscribe(
    (response: void) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

/*public onLikeComment(idComment: number): void {
  this.service.likeComment(idComment, this.P).subscribe(
    (response: void) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onDislikeComment(idComment: number): void {
  this.service.dislikeComment(idComment, this.P).subscribe(
    (response: void) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onDislike(subjectId: number): void {
  this.service.dislike(subjectId, this.P).subscribe(
    (response: void) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
*/

}
