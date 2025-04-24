import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilsupplieshackathonhomeComponent } from './civilsupplieshackathonhome.component';

describe('CivilsupplieshackathonhomeComponent', () => {
  let component: CivilsupplieshackathonhomeComponent;
  let fixture: ComponentFixture<CivilsupplieshackathonhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilsupplieshackathonhomeComponent]
    });
    fixture = TestBed.createComponent(CivilsupplieshackathonhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
