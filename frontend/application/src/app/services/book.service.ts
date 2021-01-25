import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/';
import {catchError} from 'rxjs/operators';

import {Book} from '../models/book';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class BookService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': '*'
  });
  private booksUrl = 'http://yii2-advanced.loc/api/api/apibooks';  // URL to web api

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _authService: AuthService) {
  }

  getData(): Observable<Book[]> {
    return this.http.get(`${this.booksUrl}/main`)
      .pipe(map(response => response as Book[]))
      .pipe(catchError(this.handleError));
  }

  getAnotherData(): Observable<Book[]> {
    return this.http.get(`${this.booksUrl}/another-list`)
      .pipe(map(res => res as Book[]))
      .pipe(catchError(this.handleError));
  }

  getDetail(id: number): Observable<Book> {
    return this.http.get(`${this.booksUrl}/detail/${id}`)
      .pipe(map(response => response as Book))
      .pipe(catchError(this.handleError));
  }

  getDetailBeforeEdit(id: number): Observable<Book> {
    return this.http.get(`${this.booksUrl}/edit/${id}`)
      .pipe(map(response => response as Book))
      .pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line:variable-name
  create(title: string, src: string, createdAt: string, description: string, author: string): Observable<Book> {
    return this.http
      .post(this.booksUrl, JSON.stringify({
        title,
        src,
        created_at: createdAt,
        description,
        author
      }), {headers: this.headers})
      .pipe(map(response => response as Book[]))
      .pipe(catchError(this.handleError));
  }

  update(book: Book): any {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http
      .put(url, JSON.stringify(book), {headers: this.headers})
      .pipe(map(response => response as Book[]))
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  delete(id: number): Observable<void> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
