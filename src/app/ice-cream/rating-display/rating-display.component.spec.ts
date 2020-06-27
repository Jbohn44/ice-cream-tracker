import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDisplayComponent } from './rating-display.component';

describe('RatingDisplayComponent', () => {
  let component: RatingDisplayComponent;
  let fixture: ComponentFixture<RatingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
