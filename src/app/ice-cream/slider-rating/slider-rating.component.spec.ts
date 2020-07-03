import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRatingComponent } from './slider-rating.component';

describe('SliderRatingComponent', () => {
  let component: SliderRatingComponent;
  let fixture: ComponentFixture<SliderRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
