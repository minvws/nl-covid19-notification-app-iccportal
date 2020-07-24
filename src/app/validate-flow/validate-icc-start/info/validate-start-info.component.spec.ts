import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStartInfoComponent } from './validate-start-info.component';

describe('ValidateStep1Component', () => {
  let component: ValidateStartInfoComponent;
  let fixture: ComponentFixture<ValidateStartInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateStartInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateStartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
