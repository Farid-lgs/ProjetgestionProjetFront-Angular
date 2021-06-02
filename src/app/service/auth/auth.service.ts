import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private username = '';
public isLoggedIn = false;


constructor() { }

logIn(username: string, password: string): void{
  this.username = username;
  this.isLoggedIn = true;
}

logOut(): void {
  this.isLoggedIn = false;
}

isAdminlogged(): boolean {
  if (this.username === 'Admin') {
    return true;
  }
  else { return false; }
}
isUserLoggedIn(): boolean{
  return this.isLoggedIn;

}
}
