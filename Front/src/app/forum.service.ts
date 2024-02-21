import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './models/post';
import {Comment} from './models/comment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

 
  constructor(private http: HttpClient) {}

  public getPostsList(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8040/api/Posts/retrieve-all-posts');
  }
 
  public addPost(post: Post): Observable<Object> {
    return this.http.post<Post>(`http://localhost:8040/api/Posts/add-post`, post);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`http://localhost:8040/api/Posts/update-post`, post);
  }

  public deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8040/api/Posts/remove-post/${postId}`);
  }

  public getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8040/api/Posts/retrieve-post/${postId}`);
  }

  public getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8040/api/Comments/retrieve-comment/${postId}`);
  }

  public addComment(comment: Comment, idComment: number): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8040/api/Comments/add-comment/${idComment}`, comment);
  }

  public updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8040/api/Comments/update-comment`, comment);
  }

  public deleteComment(idComment: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8040/api/Comments/remove-comment/${idComment}`);
  }

}