import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamDetailComponent } from './ice-cream-detail.component';

describe('IceCreamDetailComponent', () => {
  let component: IceCreamDetailComponent;
  let fixture: ComponentFixture<IceCreamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
