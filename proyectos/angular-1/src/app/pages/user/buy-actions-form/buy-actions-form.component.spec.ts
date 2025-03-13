import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyActionsFormComponent } from './buy-actions-form.component';

describe('BuyActionsFormComponent', () => {
  let component: BuyActionsFormComponent;
  let fixture: ComponentFixture<BuyActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyActionsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
