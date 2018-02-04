import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengeSwitchComponent } from './my-challenge-switch.component';

describe('MyChallengeSwitchComponent', () => {
  let component: MyChallengeSwitchComponent;
  let fixture: ComponentFixture<MyChallengeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChallengeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
