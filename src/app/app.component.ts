import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { SessionService } from "./services/session.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService) {}

  ngOnInit(){
    this.user = JSON.parse(sessionStorage.getItem('mySession'));
    // console.log(this.user)
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
