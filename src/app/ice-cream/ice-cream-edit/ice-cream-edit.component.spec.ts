import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamEditComponent } from './ice-cream-edit.component';

describe('IceCreamEditComponent', () => {
  let component: IceCreamEditComponent;
  let fixture: ComponentFixture<IceCreamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
