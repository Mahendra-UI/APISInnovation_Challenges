import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberUpcomingeventsComponent } from './cyber-upcomingevents.component';

describe('CyberUpcomingeventsComponent', () => {
  let component: CyberUpcomingeventsComponent;
  let fixture: ComponentFixture<CyberUpcomingeventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberUpcomingeventsComponent]
    });
    fixture = TestBed.createComponent(CyberUpcomingeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
