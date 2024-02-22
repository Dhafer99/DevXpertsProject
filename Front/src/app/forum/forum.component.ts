import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ForumService} from '../services/forum.service';
import {Post} from '../models/post';
import {Comment} from '../models/comment';
import {HttpErrorResponse} from '@angular/common/http';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { ViewChild, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{

  @ViewChild('confirmationDialog') confirmationDialog!: TemplateRef<any>;

  posts! : Post[];
  comments! : Comment[];
  closeResult!:string;
  form : boolean = false;

  constructor(
    private router: Router,
    private service: ForumService,
    private modalService: NgbModal,
    private dialog: MatDialog

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
    this.router.navigate(['/postDetail/'+ IdPost]);
  }

 
  onClaimClick(){
    this.router.navigateByUrl('/claim');
  }
 
  editPost(post : Post){
    this.service.updatePost(post).subscribe();
  }

 /* deletePost(IdPost : any){
    this.service.deletePost(IdPost).subscribe(() => this.getPosts())
  }*/
  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    closeForm(){

    }
    cancel(){
      this.form = false;
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
  }

  
   
  
 

