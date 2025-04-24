import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerthreeComponent } from './winnerthree.component';

describe('WinnerthreeComponent', () => {
  let component: WinnerthreeComponent;
  let fixture: ComponentFixture<WinnerthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
