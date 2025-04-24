import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnertwoComponent } from './winnertwo.component';

describe('WinnertwoComponent', () => {
  let component: WinnertwoComponent;
  let fixture: ComponentFixture<WinnertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnertwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
