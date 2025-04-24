import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateoneComponent } from './participateone.component';

describe('ParticipateoneComponent', () => {
  let component: ParticipateoneComponent;
  let fixture: ComponentFixture<ParticipateoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipateoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipateoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
