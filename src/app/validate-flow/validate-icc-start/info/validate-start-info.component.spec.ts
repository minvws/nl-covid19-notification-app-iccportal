import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStartInfoComponent } from './validate-start-info.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ValidateStep1Component', () => {
  let component: ValidateStartInfoComponent;
  let fixture: ComponentFixture<ValidateStartInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
