import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStep2Component } from './validate-step2.component';

describe('ValidateStep2Component', () => {
  let component: ValidateStep2Component;
  let fixture: ComponentFixture<ValidateStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
