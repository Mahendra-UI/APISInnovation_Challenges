import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesformComponent } from './challengesform.component';

describe('ChallengesformComponent', () => {
  let component: ChallengesformComponent;
  let fixture: ComponentFixture<ChallengesformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesformComponent]
    });
    fixture = TestBed.createComponent(ChallengesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
