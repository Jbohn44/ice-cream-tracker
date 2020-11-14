import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataFeedComponent } from './user-data-feed.component';

describe('UserDataFeedComponent', () => {
  let component: UserDataFeedComponent;
  let fixture: ComponentFixture<UserDataFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
