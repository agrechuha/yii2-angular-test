import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/';
import {catchError} from 'rxjs/operators';

import {Contact} from '../models/contact';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': '*'
  });
  private testUrl = 'http://yii2-advanced.loc/api/test-api';  // URL to web api

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _authService: AuthService) {
  }

  // tslint:disable-next-line:variable-name
  create(name: string, src: string, phone: string, telegram: string): Observable<Contact> {
    return this.http
      .post(`${this.testUrl}/create-contact`, JSON.stringify({
        name,
        src,
        phone,
        telegram
      }), {headers: this.headers})
      .pipe(map(response => response as Contact[]))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
