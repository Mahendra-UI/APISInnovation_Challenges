import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesadminleftpanelComponent } from './challengesadminleftpanel.component';

describe('ChallengesadminleftpanelComponent', () => {
  let component: ChallengesadminleftpanelComponent;
  let fixture: ComponentFixture<ChallengesadminleftpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesadminleftpanelComponent]
    });
    fixture = TestBed.createComponent(ChallengesadminleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
