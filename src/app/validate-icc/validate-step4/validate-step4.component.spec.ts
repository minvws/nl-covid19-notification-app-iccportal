import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStep4Component } from './validate-step4.component';

describe('ValidateStep4Component', () => {
  let component: ValidateStep4Component;
  let fixture: ComponentFixture<ValidateStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
