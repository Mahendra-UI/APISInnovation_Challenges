import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsupplieshackathonComponent } from './civilsupplieshackathon.component';

describe('CivilsupplieshackathonComponent', () => {
  let component: CivilsupplieshackathonComponent;
  let fixture: ComponentFixture<CivilsupplieshackathonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsupplieshackathonComponent]
    });
    fixture = TestBed.createComponent(CivilsupplieshackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
