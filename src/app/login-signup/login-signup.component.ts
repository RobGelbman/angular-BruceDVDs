import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Observable } from 'rxjs/Rx';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  
  formLogin = {
    username: '',
    password: ''
  };

  formSignup = {
    username: '',
    email: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService, private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('mySession'));
  }

  login() {
    this.session.login(this.formLogin)      
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
    
    this.formLogin.username ="";
    this.formLogin.password ="";
    // this.router.navigate(['/dvd']);
  }

  signup() {
    this.session.signup(this.formSignup)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );

    this.formSignup.username ="";
    this.formSignup.email ="";
    this.formSignup.password ="";
  }

  logout() {
    this.session.logout()
      .subscribe(
        () => this.user = null,
        (err) => this.error = err
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

}
