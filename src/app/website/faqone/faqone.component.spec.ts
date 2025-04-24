import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqoneComponent } from './faqone.component';

describe('FaqoneComponent', () => {
  let component: FaqoneComponent;
  let fixture: ComponentFixture<FaqoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
