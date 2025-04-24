import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberKeypartnersComponent } from './cyber-keypartners.component';

describe('CyberKeypartnersComponent', () => {
  let component: CyberKeypartnersComponent;
  let fixture: ComponentFixture<CyberKeypartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberKeypartnersComponent]
    });
    fixture = TestBed.createComponent(CyberKeypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
