import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './post';
import { TECH_POSTS } from './mock-posts';
import { OTHER_POSTS } from './mock-posts';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private endpoint: string = 'localhost:8080';
  private techBlogPostsUrl: string = this.endpoint + '/tech-blogs';
  private contentWritingPostsUrl: string = this.endpoint + '/content-writing';
  private techBlogPostUrl: string = this.endpoint + '/tech-blog/';

  constructor(private http: HttpClient) { }

  getStaticTechBlogPosts(): Observable<Post[]> {
    return of(TECH_POSTS);
  }

  getStaticTechBlogPostById(id: string): Observable<Post> {
    return of(TECH_POSTS.find(function(post: Post): boolean {
      return post.id == id;
    }));
  }

  getStaticTechBlogPostStoryById(file: string) {
    return this.http.get('../assets/data/' + file);
  }
  
  getTechBlogPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.techBlogPostsUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  getTechBlogPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.techBlogPostUrl + id)
      .pipe(retry(3), catchError(this.handleError));
  }
  
  getTechBlogPostsResponse(): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(
      this.techBlogPostsUrl, { observe: 'response' });
  }
  
  getStaticContentWritingPosts(): Observable<Post[]> {
    return of(OTHER_POSTS);
  }

  getContentWritingPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.contentWritingPostsUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
