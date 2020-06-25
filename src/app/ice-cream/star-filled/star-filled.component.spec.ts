import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFilledComponent } from './star-filled.component';

describe('StarFilledComponent', () => {
  let component: StarFilledComponent;
  let fixture: ComponentFixture<StarFilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarFilledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
