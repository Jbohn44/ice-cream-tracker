import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDisplayComponent } from './review-display.component';

describe('ReviewDisplayComponent', () => {
  let component: ReviewDisplayComponent;
  let fixture: ComponentFixture<ReviewDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
