import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamAddComponent } from './ice-cream-add.component';

describe('IceCreamAddComponent', () => {
  let component: IceCreamAddComponent;
  let fixture: ComponentFixture<IceCreamAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
