import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStep1Component } from './validate-step1.component';

describe('ValidateStep1Component', () => {
  let component: ValidateStep1Component;
  let fixture: ComponentFixture<ValidateStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
