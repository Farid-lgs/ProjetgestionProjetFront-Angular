import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser: any;

  constructor(fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.formUser = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formUser.value);
    const data = this.formUser.value;
    this.authService.logIn(data.username, data.password);
    this.router.navigate(['user']);
  }

}
