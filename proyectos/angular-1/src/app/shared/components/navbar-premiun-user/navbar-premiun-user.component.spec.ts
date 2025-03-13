import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPremiunUserComponent } from './navbar-premiun-user.component';

describe('NavbarPremiunUserComponent', () => {
  let component: NavbarPremiunUserComponent;
  let fixture: ComponentFixture<NavbarPremiunUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPremiunUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPremiunUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
