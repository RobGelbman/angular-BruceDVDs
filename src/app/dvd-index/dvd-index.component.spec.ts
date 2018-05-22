import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdIndexComponent } from './dvd-index.component';

describe('DvdIndexComponent', () => {
  let component: DvdIndexComponent;
  let fixture: ComponentFixture<DvdIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
