import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  currentComment: any;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  postComment(comment) {
    return this.currentComment = this.http.post(`${environment.BASE_URL}/comments/submitComment`, comment, )
    .map(res => res.json())
    .catch(this.handleError);
  }
}
