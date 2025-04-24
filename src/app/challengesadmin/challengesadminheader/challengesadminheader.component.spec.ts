import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesadminheaderComponent } from './challengesadminheader.component';

describe('ChallengesadminheaderComponent', () => {
  let component: ChallengesadminheaderComponent;
  let fixture: ComponentFixture<ChallengesadminheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesadminheaderComponent]
    });
    fixture = TestBed.createComponent(ChallengesadminheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
