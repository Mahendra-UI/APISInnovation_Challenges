import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsoneComponent } from './detailsone.component';

describe('DetailsoneComponent', () => {
  let component: DetailsoneComponent;
  let fixture: ComponentFixture<DetailsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
