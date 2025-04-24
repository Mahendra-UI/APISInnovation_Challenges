import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechhomeComponent } from './fintechhome.component';

describe('FintechhomeComponent', () => {
  let component: FintechhomeComponent;
  let fixture: ComponentFixture<FintechhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintechhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FintechhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
