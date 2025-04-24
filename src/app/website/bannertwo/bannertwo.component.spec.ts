import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannertwoComponent } from './bannertwo.component';

describe('BannertwoComponent', () => {
  let component: BannertwoComponent;
  let fixture: ComponentFixture<BannertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannertwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
