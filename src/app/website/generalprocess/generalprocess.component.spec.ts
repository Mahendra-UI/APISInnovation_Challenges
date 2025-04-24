import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralprocessComponent } from './generalprocess.component';

describe('GeneralprocessComponent', () => {
  let component: GeneralprocessComponent;
  let fixture: ComponentFixture<GeneralprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
