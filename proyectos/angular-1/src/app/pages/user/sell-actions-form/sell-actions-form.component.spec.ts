import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellActionsFormComponent } from './sell-actions-form.component';

describe('SellActionsFormComponent', () => {
  let component: SellActionsFormComponent;
  let fixture: ComponentFixture<SellActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellActionsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
