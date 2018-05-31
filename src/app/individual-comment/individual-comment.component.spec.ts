import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCommentComponent } from './individual-comment.component';

describe('IndividualCommentComponent', () => {
  let component: IndividualCommentComponent;
  let fixture: ComponentFixture<IndividualCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
