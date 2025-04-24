import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsuppliesdetailedproblemstatementsComponent } from './civilsuppliesdetailedproblemstatements.component';

describe('CivilsuppliesdetailedproblemstatementsComponent', () => {
  let component: CivilsuppliesdetailedproblemstatementsComponent;
  let fixture: ComponentFixture<CivilsuppliesdetailedproblemstatementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsuppliesdetailedproblemstatementsComponent]
    });
    fixture = TestBed.createComponent(CivilsuppliesdetailedproblemstatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
