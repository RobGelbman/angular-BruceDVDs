import { Component, OnInit }  from '@angular/core';
import { Observable }         from 'rxjs/Rx';
import { Router } from "@angular/router";
import { CommentService } from "../services/comment.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  user: any;
  commentForm:any = {
    username: '',
    userId: '',
    comment: '',
    currentDVD: ''
  };
  currentDVD: number;
  error: string;
  comments: any;

  constructor(private comment: CommentService, private router: Router) { }  

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('mySession'));
    setTimeout(()=>{this.showComments() }, 1000)
    ;
  }

  submitComment(){ 
    
    if(this.user !== null){
      this.commentForm.currentDVD = Number(JSON.parse(sessionStorage.getItem('currentDVD')))
      this.commentForm.userId = this.user._id;
      this.commentForm.username = this.user.username; 
      this.commentForm.userId
      this.comment.postComment(this.commentForm)
        .subscribe(
          (newComment) => this.showComments(),
          (err) => this.errorCb(err)
          
        );

      this.commentForm.comment ="";
      this.commentForm.userId ="";
      this.commentForm.username =""; 
      
    this.currentDVD = Number(JSON.parse(sessionStorage.getItem('currentDVD')))
  // }
      }
      
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
    
  }

  successCb(user) {
    this.user = user;
    this.error = null;
    
    
  }

  showComments(){
    this.currentDVD = Number(JSON.parse(sessionStorage.getItem('currentDVD')))
    this.comment.getComments(this.currentDVD)
      .subscribe((comments) => {
        this.comments = comments;
      });
  }

}
