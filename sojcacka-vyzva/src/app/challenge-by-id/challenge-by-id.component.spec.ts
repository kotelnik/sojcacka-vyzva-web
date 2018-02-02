import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeByIdComponent } from './challenge-by-id.component';

describe('ChallengeByIdComponent', () => {
  let component: ChallengeByIdComponent;
  let fixture: ComponentFixture<ChallengeByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
