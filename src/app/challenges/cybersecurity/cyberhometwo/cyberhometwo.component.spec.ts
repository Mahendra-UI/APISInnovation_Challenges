import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberhometwoComponent } from './cyberhometwo.component';

describe('CyberhometwoComponent', () => {
  let component: CyberhometwoComponent;
  let fixture: ComponentFixture<CyberhometwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberhometwoComponent]
    });
    fixture = TestBed.createComponent(CyberhometwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
