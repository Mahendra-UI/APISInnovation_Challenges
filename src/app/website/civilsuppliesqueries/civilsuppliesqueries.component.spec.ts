import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsuppliesqueriesComponent } from './civilsuppliesqueries.component';

describe('CivilsuppliesqueriesComponent', () => {
  let component: CivilsuppliesqueriesComponent;
  let fixture: ComponentFixture<CivilsuppliesqueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsuppliesqueriesComponent]
    });
    fixture = TestBed.createComponent(CivilsuppliesqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
