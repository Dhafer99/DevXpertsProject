import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  

  constructor(private http: HttpClient) { }

  public getPostsList(page: number, size: number): Observable<Post[]>{
    const params = new HttpParams()
    .set('page',page.toString())
    .set('size', size.toString());
    console.log("Getting ALL")
    return this.http.get<Post[]>('http://localhost:8040/api/Posts/retrieve-all-posts',{params});
  }
 
  public addPost(post: Post): Observable<Object> {
    return this.http.post<Post>(`http://localhost:8040/api/Posts/add-post`, post);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`http://localhost:8040/api/Posts/update-post`, post);
  }

  public deletePost(IdPost: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8040/api/Posts/remove-post/${IdPost}`);
  }

  public getPost(IdPost: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8040/api/Posts/retrieve-post/${IdPost}`);}
  

 /* public getPost(permaLink: Number):Observable<Post>{
    return this.http.get<Post>(`http://localhost:8040/api/Posts/retrieve-post/`+permaLink);
  }*/

  public getComments(IdPost: number): Observable<Comment[]> {
    return this.http.get<Comment[]> (`http://localhost:8040/api/Comments/retrieve-comment/${IdPost}`);
  }

  /*public addComment(comment: Comment, idComment: number): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8040/api/Comments/add-comment/${idComment}`, comment);
  }*/
  addComment(c: Comment, idPost: number): Observable<Comment> {
    const url = `http://localhost:8040/api/Comments/add-comment/${idPost}`;
    console.log("current message =="+c.textComment)
    return this.http.post<Comment>(url, c);
  }

 /* public updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8040/api/Comments/update-comment`, comment);
  }*/
  public updateComment(comment: Comment, postId: number): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8040/api/Comments/update-comment/${postId}`, comment);
  }

  public deleteComment(idComment: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8040/api/Comments/remove-comment/${idComment}`);
  }

  
  public updatePost1(post: any) {
    return this.http.put('http://localhost:8040/api/Posts/update-post', post);
  }

  likePost(postId: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8040/api/Posts/${postId}/like`, {});
  }

  dislikePost(postId: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8040/api/posts/${postId}/dislike`, {});
  }
 /* public dislike(idPost: number, P: Post): any {
    return this.http.put(`http://localhost:8040/api/Posts/dislikeSubject-id/${idPost}`, P);
  }

  public dislikeComment(idComment: number, P: Post): any {
    return this.http.put(`http://localhost:8040/api/Comments/dislikeComment-id/${idComment}`, P);
  }

  public like(idPost: number, P: Post): any {
    return this.http.put(`http://localhost:8040/api/Posts/likeSubject-id/${idPost}`, P);
  }

  public likeComment(idComment: number, P: Post): any {
    return this.http.put(`http://localhost:8040/api/Comments/likeComment-id/${idComment}`, P);
  }*/
}
