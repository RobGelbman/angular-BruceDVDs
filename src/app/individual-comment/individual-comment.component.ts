import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-individual-comment',
  templateUrl: './individual-comment.component.html',
  styleUrls: ['./individual-comment.component.css']
})
export class IndividualCommentComponent implements OnInit {
  @Input() oneComment: any;
  @Output() onDelete = new EventEmitter<string>();
  user: any;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('mySession'));
  }

  deleteComment () {
    console.log(this.oneComment._id)
    this.onDelete.emit(this.oneComment._id);
  }

}
