import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicpartnersComponent } from './strategicpartners.component';

describe('StrategicpartnersComponent', () => {
  let component: StrategicpartnersComponent;
  let fixture: ComponentFixture<StrategicpartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicpartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
