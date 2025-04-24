import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesadminlandingComponent } from './challengesadminlanding.component';

describe('ChallengesadminlandingComponent', () => {
  let component: ChallengesadminlandingComponent;
  let fixture: ComponentFixture<ChallengesadminlandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesadminlandingComponent]
    });
    fixture = TestBed.createComponent(ChallengesadminlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
