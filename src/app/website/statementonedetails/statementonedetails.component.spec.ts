import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementonedetailsComponent } from './statementonedetails.component';

describe('StatementonedetailsComponent', () => {
  let component: StatementonedetailsComponent;
  let fixture: ComponentFixture<StatementonedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementonedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
