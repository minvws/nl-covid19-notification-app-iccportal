import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIccStartComponent } from './validate-icc-start.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('ValidateIccStartComponent', () => {
  let component: ValidateIccStartComponent;
  let fixture: ComponentFixture<ValidateIccStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: v => {
                return {id: 123};
              }
            })
          }
        }
      ],
      declarations: [ ValidateIccStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateIccStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
