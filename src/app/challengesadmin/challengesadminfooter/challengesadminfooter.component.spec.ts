import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesadminfooterComponent } from './challengesadminfooter.component';

describe('ChallengesadminfooterComponent', () => {
  let component: ChallengesadminfooterComponent;
  let fixture: ComponentFixture<ChallengesadminfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesadminfooterComponent]
    });
    fixture = TestBed.createComponent(ChallengesadminfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
