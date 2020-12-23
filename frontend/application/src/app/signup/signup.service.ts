import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class ContactsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private signupUrl = 'http://yii2-advanced.loc/apibooks/signup';  // URL to web api

  constructor(private http: HttpClient) {
  }

  create(username: string, email: string, password: string): Promise<any> {
    return this.http
      .post(this.signupUrl, JSON.stringify({
        username: username,
        email: email,
        password: password,
      }), {headers: this.headers})
      .toPromise()
      .then(res => res as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
