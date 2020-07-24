import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStartInputComponent } from './validate-start-input.component';

describe('ValidateStep2Component', () => {
  let component: ValidateStartInputComponent;
  let fixture: ComponentFixture<ValidateStartInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStartInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
