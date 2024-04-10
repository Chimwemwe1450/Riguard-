import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTicket: string;

  constructor(
    private cookieService: CookieService
  ) { }

  public isAuthenticated(): boolean {
    this.authTicket = localStorage.getItem('token');
    if (this.authTicket) {
      return true;
    } else {
      return false;
    }
  }

  public getUserRole(): string {
    return localStorage.getItem('role');
  }

  public getUserId(): string {
    return localStorage.getItem('userId');
  }

  public getToken(): string {
    return this.authTicket;
  }

  public getUser(): {name: string; email: string} {
    return JSON.parse(localStorage.getItem('user'));
  }

}
