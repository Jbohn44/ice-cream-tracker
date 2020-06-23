import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamPageComponent } from './ice-cream-page.component';

describe('IceCreamPageComponent', () => {
  let component: IceCreamPageComponent;
  let fixture: ComponentFixture<IceCreamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
