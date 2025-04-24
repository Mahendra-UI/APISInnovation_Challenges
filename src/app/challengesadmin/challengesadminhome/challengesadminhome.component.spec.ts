import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesadminhomeComponent } from './challengesadminhome.component';

describe('ChallengesadminhomeComponent', () => {
  let component: ChallengesadminhomeComponent;
  let fixture: ComponentFixture<ChallengesadminhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesadminhomeComponent]
    });
    fixture = TestBed.createComponent(ChallengesadminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
