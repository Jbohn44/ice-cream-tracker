import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserFeedComponent } from './other-user-feed.component';

describe('OtherUserFeedComponent', () => {
  let component: OtherUserFeedComponent;
  let fixture: ComponentFixture<OtherUserFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUserFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUserFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
