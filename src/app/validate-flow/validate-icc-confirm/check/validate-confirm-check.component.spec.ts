import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateConfirmCheckComponent } from './validate-confirm-check.component';

describe('ValidateConfirmCheckComponent', () => {
  let component: ValidateConfirmCheckComponent;
  let fixture: ComponentFixture<ValidateConfirmCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateConfirmCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateConfirmCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
