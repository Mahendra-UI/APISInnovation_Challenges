import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemStatementsDetailsComponent } from './problem-statements-details.component';

describe('ProblemStatementsDetailsComponent', () => {
  let component: ProblemStatementsDetailsComponent;
  let fixture: ComponentFixture<ProblemStatementsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemStatementsDetailsComponent]
    });
    fixture = TestBed.createComponent(ProblemStatementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
