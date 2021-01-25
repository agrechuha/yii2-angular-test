import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpClient,
} from '@angular/common/http';
import {Observable} from 'rxjs/';
import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ setHeaders: { Authorization: 'Bearer ' + this._authService.getAuthKey() } });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
