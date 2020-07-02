import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIccSymptonsComponent } from './validate-icc-symptons.component';

describe('ValidateIccSymptonsComponent', () => {
  let component: ValidateIccSymptonsComponent;
  let fixture: ComponentFixture<ValidateIccSymptonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateIccSymptonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateIccSymptonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
