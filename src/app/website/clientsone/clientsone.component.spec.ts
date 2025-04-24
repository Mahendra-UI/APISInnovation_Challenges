import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsoneComponent } from './clientsone.component';

describe('ClientsoneComponent', () => {
  let component: ClientsoneComponent;
  let fixture: ComponentFixture<ClientsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
