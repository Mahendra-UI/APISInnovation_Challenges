import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsupplieslandingComponent } from './civilsupplieslanding.component';

describe('CivilsupplieslandingComponent', () => {
  let component: CivilsupplieslandingComponent;
  let fixture: ComponentFixture<CivilsupplieslandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsupplieslandingComponent]
    });
    fixture = TestBed.createComponent(CivilsupplieslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
