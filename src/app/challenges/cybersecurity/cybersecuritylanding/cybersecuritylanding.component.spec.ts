import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecuritylandingComponent } from './cybersecuritylanding.component';

describe('CybersecuritylandingComponent', () => {
  let component: CybersecuritylandingComponent;
  let fixture: ComponentFixture<CybersecuritylandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CybersecuritylandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybersecuritylandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
