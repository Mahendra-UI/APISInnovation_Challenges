import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizedoneComponent } from './organizedone.component';

describe('OrganizedoneComponent', () => {
  let component: OrganizedoneComponent;
  let fixture: ComponentFixture<OrganizedoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizedoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
