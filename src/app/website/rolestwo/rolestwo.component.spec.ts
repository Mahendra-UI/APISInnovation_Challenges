import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolestwoComponent } from './rolestwo.component';

describe('RolestwoComponent', () => {
  let component: RolestwoComponent;
  let fixture: ComponentFixture<RolestwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolestwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolestwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
