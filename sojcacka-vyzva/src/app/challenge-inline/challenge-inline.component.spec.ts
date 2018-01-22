import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeInlineComponent } from './challenge-inline.component';

describe('ChallengeInlineComponent', () => {
  let component: ChallengeInlineComponent;
  let fixture: ComponentFixture<ChallengeInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
