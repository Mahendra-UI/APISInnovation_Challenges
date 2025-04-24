import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemstatementsoneComponent } from './problemstatementsone.component';

describe('ProblemstatementsoneComponent', () => {
  let component: ProblemstatementsoneComponent;
  let fixture: ComponentFixture<ProblemstatementsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemstatementsoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemstatementsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
