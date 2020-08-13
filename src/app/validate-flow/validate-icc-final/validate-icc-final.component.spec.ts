import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidateIccFinalComponent} from './validate-icc-final.component';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('ValidateIccFinalComponent', () => {
    let component: ValidateIccFinalComponent;
    let fixture: ComponentFixture<ValidateIccFinalComponent>;

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
            declarations: [ValidateIccFinalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ValidateIccFinalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
