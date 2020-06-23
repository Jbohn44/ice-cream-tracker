import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamCardComponent } from './ice-cream-card.component';

describe('IceCreamCardComponent', () => {
  let component: IceCreamCardComponent;
  let fixture: ComponentFixture<IceCreamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
