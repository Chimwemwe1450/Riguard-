import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private _alertService: AlertService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // redirect to login page
          this._alertService.presentAlertSingleButton(
          'Expried Token',
          'To proceed please login in again',
          'Ok',
          async ()=>{
            this.router.navigate(['/login']);
          });
        }
        return throwError(error);
      })
    );
  }
}
