import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActionsFormComponent } from './delete-actions-form.component';

describe('DeleteActionsFormComponent', () => {
  let component: DeleteActionsFormComponent;
  let fixture: ComponentFixture<DeleteActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteActionsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
