import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';
import { TECH_POSTS } from './mock-posts';
import { OTHER_POSTS } from './mock-posts';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private endpoint: string = 'localhost:8080';
  private techBlogPostsUrl: string = this.endpoint + '/tech-blogs';
  private contentWritingPostsUrl: string = this.endpoint + '/content-writing';

  constructor(private http: HttpClient) { }

  getStaticTechBlogPosts(): Observable<Post[]> {
    return of(TECH_POSTS);
  }

  getStaticContentWritingPosts(): Observable<Post[]> {
    return of(OTHER_POSTS);
  }
  
  getTechBlogPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.techBlogPostsUrl);
      /*.pipe(catchError(this.handleError('getTechBlogPosts', [])));*/
  }

  getContentWritingPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.contentWritingPostsUrl);
      /*.pipe(catchError(this.handleError('getContentWritingPosts', [])));*/
  }

  /*private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return (result as T);
  };*/

}
