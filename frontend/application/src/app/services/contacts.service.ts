import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Contact} from '../models/contact';
import {Observable} from 'rxjs/';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class ContactsService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': '*'
  });
  private contactsUrl = 'http://yii2-advanced.loc/api/api/contacts';  // URL to web api

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _authService: AuthService) {
  }

  getData(): Observable<Contact[]> {
    return this.http.get(`${this.contactsUrl}/information`)
      .pipe(map(response => response as Contact[]))
      .pipe(catchError(this.handleError));
  }

  getAllData(): Observable<Contact[]> {
    return this.http.get(`${this.contactsUrl}/all-contacts`)
      .pipe(map(response => response as Contact[]))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
