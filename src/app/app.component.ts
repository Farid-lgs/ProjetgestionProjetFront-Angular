import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionProjet';

  constructor(public authService: AuthService){

  }
  logout(): void{
    this.authService.logOut();
  }

  }