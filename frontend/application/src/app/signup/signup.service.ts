import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class SignupService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private signupUrl = 'http://yii2-advanced.loc/api/api/auth/signup';  // URL to web api

  constructor(private http: HttpClient) {
  }

  create(username: string, email: string, password: string): Observable<any> {
    return this.http
      .post(this.signupUrl, JSON.stringify({
        username,
        email,
        password,
      }), {headers: this.headers})
      .pipe(map(res => res as any))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
