import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidateStartInputComponent} from './validate-start-input.component';
import {ActivatedRoute, Router} from "@angular/router";
import {LabConfirmService} from "../../../services/lab-confirm.service";
import {of} from "rxjs";

describe('ValidateStartInputComponent', () => {
    let component: ValidateStartInputComponent;
    let fixture: ComponentFixture<ValidateStartInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                Router,
                LabConfirmService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParams: of({
                            get: v => {
                                return {id: 123};
                            }
                        })
                    }
                }
            ],
            declarations: [ValidateStartInputComponent]
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
