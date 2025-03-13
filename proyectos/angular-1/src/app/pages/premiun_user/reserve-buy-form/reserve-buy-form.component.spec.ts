import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveBuyFormComponent } from './reserve-buy-form.component';

describe('ReserveBuyFormComponent', () => {
  let component: ReserveBuyFormComponent;
  let fixture: ComponentFixture<ReserveBuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveBuyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
