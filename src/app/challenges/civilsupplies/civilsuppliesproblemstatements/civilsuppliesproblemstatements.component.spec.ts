import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsuppliesproblemstatementsComponent } from './civilsuppliesproblemstatements.component';

describe('CivilsuppliesproblemstatementsComponent', () => {
  let component: CivilsuppliesproblemstatementsComponent;
  let fixture: ComponentFixture<CivilsuppliesproblemstatementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsuppliesproblemstatementsComponent]
    });
    fixture = TestBed.createComponent(CivilsuppliesproblemstatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
