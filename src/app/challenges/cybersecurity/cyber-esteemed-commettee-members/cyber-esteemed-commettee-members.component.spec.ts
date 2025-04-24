import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberEsteemedCommetteeMembersComponent } from './cyber-esteemed-commettee-members.component';

describe('CyberEsteemedCommetteeMembersComponent', () => {
  let component: CyberEsteemedCommetteeMembersComponent;
  let fixture: ComponentFixture<CyberEsteemedCommetteeMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberEsteemedCommetteeMembersComponent]
    });
    fixture = TestBed.createComponent(CyberEsteemedCommetteeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
