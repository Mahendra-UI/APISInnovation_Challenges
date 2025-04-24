import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberinnerbannerComponent } from './cyberinnerbanner.component';

describe('CyberinnerbannerComponent', () => {
  let component: CyberinnerbannerComponent;
  let fixture: ComponentFixture<CyberinnerbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberinnerbannerComponent]
    });
    fixture = TestBed.createComponent(CyberinnerbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
