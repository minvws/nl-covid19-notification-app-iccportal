import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStep3Component } from './validate-step3.component';

describe('ValidateStep3Component', () => {
  let component: ValidateStep3Component;
  let fixture: ComponentFixture<ValidateStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
