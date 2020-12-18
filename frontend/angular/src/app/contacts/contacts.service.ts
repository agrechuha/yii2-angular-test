import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class ContactsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private contactUrl = 'http://yii2-advanced.loc/apibooks/contacts';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getData(): Promise<Contact[]> {
    return this.http.get(this.contactUrl)
      .toPromise()
      .then(response => response as Contact[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
