import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberEcosystemPartnersComponent } from './cyber-ecosystem-partners.component';

describe('CyberEcosystemPartnersComponent', () => {
  let component: CyberEcosystemPartnersComponent;
  let fixture: ComponentFixture<CyberEcosystemPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberEcosystemPartnersComponent]
    });
    fixture = TestBed.createComponent(CyberEcosystemPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
