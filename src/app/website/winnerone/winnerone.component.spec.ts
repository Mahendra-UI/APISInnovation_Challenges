import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinneroneComponent } from './winnerone.component';

describe('WinneroneComponent', () => {
  let component: WinneroneComponent;
  let fixture: ComponentFixture<WinneroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinneroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinneroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
