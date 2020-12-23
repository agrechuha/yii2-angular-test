import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Contact} from './contact';
import {Observable} from 'rxjs/';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class ContactsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private contactUrl = 'http://yii2-advanced.loc/api/api/contacts';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Contact[]> {
    return this.http.get(this.contactUrl)
      .pipe(map(response => response as Contact[]))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
