import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIccComponent } from './validate-icc.component';

describe('ValidateIccComponent', () => {
  let component: ValidateIccComponent;
  let fixture: ComponentFixture<ValidateIccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateIccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateIccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
