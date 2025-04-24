import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeslandingComponent } from './challengeslanding.component';

describe('ChallengeslandingComponent', () => {
  let component: ChallengeslandingComponent;
  let fixture: ComponentFixture<ChallengeslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeslandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
