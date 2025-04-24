import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleformtestingComponent } from './googleformtesting.component';

describe('GoogleformtestingComponent', () => {
  let component: GoogleformtestingComponent;
  let fixture: ComponentFixture<GoogleformtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleformtestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleformtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
