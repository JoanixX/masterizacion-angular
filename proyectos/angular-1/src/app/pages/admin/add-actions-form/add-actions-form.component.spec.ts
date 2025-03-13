import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActionsFormComponent } from './add-actions-form.component';

describe('AddActionsFormComponent', () => {
  let component: AddActionsFormComponent;
  let fixture: ComponentFixture<AddActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddActionsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
