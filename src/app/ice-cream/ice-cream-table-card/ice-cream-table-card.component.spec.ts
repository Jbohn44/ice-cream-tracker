import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamTableCardComponent } from './ice-cream-table-card.component';

describe('IceCreamTableCardComponent', () => {
  let component: IceCreamTableCardComponent;
  let fixture: ComponentFixture<IceCreamTableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamTableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
