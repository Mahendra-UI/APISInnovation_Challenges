import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingeventstwoComponent } from './upcomingeventstwo.component';

describe('UpcomingeventstwoComponent', () => {
  let component: UpcomingeventstwoComponent;
  let fixture: ComponentFixture<UpcomingeventstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingeventstwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingeventstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
