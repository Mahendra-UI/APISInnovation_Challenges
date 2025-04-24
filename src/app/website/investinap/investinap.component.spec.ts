import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestinapComponent } from './investinap.component';

describe('InvestinapComponent', () => {
  let component: InvestinapComponent;
  let fixture: ComponentFixture<InvestinapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestinapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestinapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
