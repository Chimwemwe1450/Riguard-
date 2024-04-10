import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public didLogIn = false;
  private apiBaseUrl = environment.baseUrl;

  private headers: HttpHeaders = new HttpHeaders ({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  public login(loginData: FormData): Observable<any> {
    const body = {
      password: loginData['password'],
      rememberMe: false,
      username: loginData['email']
    };

    return <any>this.http.post(
      `${this.apiBaseUrl}authenticate`,
      body,
      { ...this.headers }
    );
  }

  public resetPassword(email: string): Observable<any> {
    return <any>this.http.post(
      `${this.apiBaseUrl}account/reset-password/init`,
      {
        email
      },
      {...this.headers}
    );
  }

  public changePassword(password: string): Observable<any> {
    return <any>this.http.post(
      `${this.apiBaseUrl}account/change-password`,
      {
        password
      },
      {...this.headers}
    );
  }

}
