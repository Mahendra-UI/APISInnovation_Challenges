import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityhomeComponent } from './cybersecurityhome.component';

describe('CybersecurityhomeComponent', () => {
  let component: CybersecurityhomeComponent;
  let fixture: ComponentFixture<CybersecurityhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CybersecurityhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybersecurityhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
