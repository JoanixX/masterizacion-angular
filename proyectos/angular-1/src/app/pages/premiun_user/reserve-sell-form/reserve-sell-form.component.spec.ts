import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveSellFormComponent } from './reserve-sell-form.component';

describe('ReserveSellFormComponent', () => {
  let component: ReserveSellFormComponent;
  let fixture: ComponentFixture<ReserveSellFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveSellFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveSellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
