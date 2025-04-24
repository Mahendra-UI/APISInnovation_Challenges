import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasecuritychallengeComponent } from './datasecuritychallenge.component';

describe('DatasecuritychallengeComponent', () => {
  let component: DatasecuritychallengeComponent;
  let fixture: ComponentFixture<DatasecuritychallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasecuritychallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasecuritychallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
