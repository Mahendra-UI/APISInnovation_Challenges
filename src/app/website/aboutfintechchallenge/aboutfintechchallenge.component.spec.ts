import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfintechchallengeComponent } from './aboutfintechchallenge.component';

describe('AboutfintechchallengeComponent', () => {
  let component: AboutfintechchallengeComponent;
  let fixture: ComponentFixture<AboutfintechchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutfintechchallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutfintechchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
