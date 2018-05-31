import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-comment',
  templateUrl: './individual-comment.component.html',
  styleUrls: ['./individual-comment.component.css']
})
export class IndividualCommentComponent implements OnInit {
  @Input() oneComment: any;
  constructor() { }

  ngOnInit() {
  }

}
