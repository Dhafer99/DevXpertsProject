import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../services/forum.service';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  post$!:Observable<Post>;
  permaLink!: Number;

  constructor(
    private router: ActivatedRoute,
    private service: ForumService
  ){}

  ngOnInit() {
    this.getPost();
  }
  getPost(): void{
    const IdPost = +this.router.snapshot.paramMap.get('id')!;
    console.log("IdPost"+ IdPost);
    this.post$=this.service.getPost(IdPost);
  }

  
}
