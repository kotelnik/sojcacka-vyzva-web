import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptChallengeComponent } from './accept-challenge.component';

describe('AcceptChallengeComponent', () => {
  let component: AcceptChallengeComponent;
  let fixture: ComponentFixture<AcceptChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
