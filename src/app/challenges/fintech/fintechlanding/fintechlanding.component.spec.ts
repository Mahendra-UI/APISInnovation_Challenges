import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechlandingComponent } from './fintechlanding.component';

describe('FintechlandingComponent', () => {
  let component: FintechlandingComponent;
  let fixture: ComponentFixture<FintechlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintechlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FintechlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
