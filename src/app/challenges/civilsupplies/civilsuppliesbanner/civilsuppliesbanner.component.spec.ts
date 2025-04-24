import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsuppliesbannerComponent } from './civilsuppliesbanner.component';

describe('CivilsuppliesbannerComponent', () => {
  let component: CivilsuppliesbannerComponent;
  let fixture: ComponentFixture<CivilsuppliesbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsuppliesbannerComponent]
    });
    fixture = TestBed.createComponent(CivilsuppliesbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
