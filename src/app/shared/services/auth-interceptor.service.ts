import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private _authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headersToAppend = {};
    const authToken = this._authService.getToken();

    // Here check if the request has the header already
    if(!req.headers.has('Authorization') && !req.url.startsWith(environment.imageBucketUrl)) {
       headersToAppend['Authorization'] = `Bearer ${authToken}`;
    }

    req = req.clone({
      setHeaders: headersToAppend
    });
    return next.handle(req);

    const authRequest = req.clone({
      headers: new HttpHeaders({Authorization: 'Bearer ' + authToken})
    });
    return next.handle(authRequest);
  }
}
