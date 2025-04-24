import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopartnersComponent } from './ecopartners.component';

describe('EcopartnersComponent', () => {
  let component: EcopartnersComponent;
  let fixture: ComponentFixture<EcopartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcopartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcopartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
