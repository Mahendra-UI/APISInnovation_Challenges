import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesoneComponent } from './rolesone.component';

describe('RolesoneComponent', () => {
  let component: RolesoneComponent;
  let fixture: ComponentFixture<RolesoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
