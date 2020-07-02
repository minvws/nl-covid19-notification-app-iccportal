import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStep5Component } from './validate-step5.component';

describe('ValidateStep5Component', () => {
  let component: ValidateStep5Component;
  let fixture: ComponentFixture<ValidateStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
