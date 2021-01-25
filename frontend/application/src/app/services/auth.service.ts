
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders
  ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': '*'
  });
  private authUrl = 'http://yii2-advanced.loc/api/api/auth';  // URL to web api

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string, rememberMe: number): Observable<any> {
    return this.http
      .post(`${this.authUrl}/login`, JSON.stringify({
        email,
        password,
        rememberMe,
      }), {headers: this.headers})
      .pipe(map(res => res as any))
      .pipe(catchError(this.handleError));
  }

  create(username: string, email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.authUrl}/signup`, JSON.stringify({
        username,
        email,
        password,
      }), {headers: this.headers})
      .pipe(map(res => res as any))
      .pipe(catchError(this.handleError));
  }

  getAuthKey(): any {
    return localStorage.getItem('userAuthKey');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
