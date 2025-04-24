import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypartnersComponent } from './keypartners.component';

describe('KeypartnersComponent', () => {
  let component: KeypartnersComponent;
  let fixture: ComponentFixture<KeypartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
