import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment'

@Injectable()
export class SessionService {

  constructor(private http: Http) { }
  currentUser: any;
  sessionUser: any;

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.currentUser = this.http.post(`${environment.BASE_URL}/signup`, user, )
    .map(res => res.json())
    .catch(this.handleError);
  }

  login(user) {
    this.currentUser = this.http.post(`${environment.BASE_URL}/login`, user)
    .map(res => res.json())      
    .catch(this.handleError)
    this.currentUser
    .subscribe(
      (user) => this.setSession(user)
    )
    return this.currentUser
  }

  logout() {
    this.currentUser = ""
    sessionStorage.clear()
    return this.http.post(`${environment.BASE_URL}/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return (this.http.get(`${environment.BASE_URL}/loggedin`)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
  .toPromise()
    // .then(userFromBackend => {
    //   this.temporaryUser = userFromBackend;
    //   this.currentUser = JSON.parse(this.temporaryUser._body);
    //   console.log("currentUser in service: ", this.currentUser);
    //   userFromBackend.json();
    // })
  )
  }

  getPrivateData() {
    return this.http.get(`${environment.BASE_URL}/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  setSession(user){
    // this.sessionUser = user;
    sessionStorage.setItem("mySession", JSON.stringify(user))
  }
  
}
