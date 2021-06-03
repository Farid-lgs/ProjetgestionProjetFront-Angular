import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8888/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public adminLogged = false;


  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setAuthenticated(authenticated: boolean) {
    this.isLoggedIn = authenticated;
  }

  isAdminLogged(): boolean {
    return this.adminLogged;
  }
  setAdminLogged(adminLogged: boolean){
    this.adminLogged = adminLogged;
  }

}
