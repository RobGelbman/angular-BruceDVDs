import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  
  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService) {}

  ngOnInit() {
  }

  login() {
    this.session.login(this.formInfo)      
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
    
    this.formInfo.username ="";
    this.formInfo.password ="";
  }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );

    this.formInfo.username ="";
    this.formInfo.password ="";
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
