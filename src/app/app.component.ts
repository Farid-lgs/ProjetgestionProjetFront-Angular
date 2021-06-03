import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { TokenStorageService } from './service/token/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  adminLogged = false;
  username?: string;
  roles: string[];

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.roles = this.tokenStorageService.getUser().roles;
      this.roles.forEach(element => {
        console.log(element);
        if ( element === 'ROLE_ADMIN') {this.authService.setAdminLogged(true); }}
      );
      this.adminLogged = this.authService.isAdminLogged();
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.authService.setAuthenticated(false);
    window.location.reload();
  }
}
