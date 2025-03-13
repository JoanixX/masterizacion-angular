import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalConnectionFormComponent } from './external-connection-form.component';

describe('ExternalConnectionFormComponent', () => {
  let component: ExternalConnectionFormComponent;
  let fixture: ComponentFixture<ExternalConnectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalConnectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
