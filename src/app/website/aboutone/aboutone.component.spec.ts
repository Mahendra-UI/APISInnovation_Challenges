import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutoneComponent } from './aboutone.component';

describe('AboutoneComponent', () => {
  let component: AboutoneComponent;
  let fixture: ComponentFixture<AboutoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
