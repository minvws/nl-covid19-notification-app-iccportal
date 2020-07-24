import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIccConfirmComponent } from './validate-icc-confirm.component';

describe('ValidateIccConfirmComponent', () => {
  let component: ValidateIccConfirmComponent;
  let fixture: ComponentFixture<ValidateIccConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateIccConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateIccConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
