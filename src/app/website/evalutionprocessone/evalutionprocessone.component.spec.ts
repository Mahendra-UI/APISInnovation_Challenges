import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalutionprocessoneComponent } from './evalutionprocessone.component';

describe('EvalutionprocessoneComponent', () => {
  let component: EvalutionprocessoneComponent;
  let fixture: ComponentFixture<EvalutionprocessoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalutionprocessoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvalutionprocessoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
