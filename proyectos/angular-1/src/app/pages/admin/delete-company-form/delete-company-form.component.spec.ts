import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompanyFormComponent } from './delete-company-form.component';

describe('DeleteCompanyFormComponent', () => {
  let component: DeleteCompanyFormComponent;
  let fixture: ComponentFixture<DeleteCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCompanyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
