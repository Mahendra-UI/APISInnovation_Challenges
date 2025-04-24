import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberProblemStatementstwoComponent } from './cyber-problem-statementstwo.component';

describe('CyberProblemStatementstwoComponent', () => {
  let component: CyberProblemStatementstwoComponent;
  let fixture: ComponentFixture<CyberProblemStatementstwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberProblemStatementstwoComponent]
    });
    fixture = TestBed.createComponent(CyberProblemStatementstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
