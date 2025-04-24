import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineprocesstwoComponent } from './timelineprocesstwo.component';

describe('TimelineprocesstwoComponent', () => {
  let component: TimelineprocesstwoComponent;
  let fixture: ComponentFixture<TimelineprocesstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineprocesstwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineprocesstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
