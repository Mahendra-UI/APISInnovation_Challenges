import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineprocessComponent } from './timelineprocess.component';

describe('TimelineprocessComponent', () => {
  let component: TimelineprocessComponent;
  let fixture: ComponentFixture<TimelineprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
