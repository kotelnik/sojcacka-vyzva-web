import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInlineComponent } from './user-inline.component';

describe('UserInlineComponent', () => {
  let component: UserInlineComponent;
  let fixture: ComponentFixture<UserInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
