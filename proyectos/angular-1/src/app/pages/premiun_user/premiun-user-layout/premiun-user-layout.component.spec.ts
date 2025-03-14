import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiunUserLayoutComponent } from './premiun-user-layout.component';

describe('PremiunUserLayoutComponent', () => {
  let component: PremiunUserLayoutComponent;
  let fixture: ComponentFixture<PremiunUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiunUserLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiunUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
