import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidateIccFinalComponent} from './validate-icc-final.component';
import {ActivatedRoute} from '@angular/router';

describe('ValidateIccFinalComponent', () => {
    let component: ValidateIccFinalComponent;
    let fixture: ComponentFixture<ValidateIccFinalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            queryParams: {
                                success: true,
                                symptomsDate: new Date(1597666227190)
                            }
                        },
                    }
                }
            ],
            declarations: [ValidateIccFinalComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ValidateIccFinalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('friendlySymptomsDate() should be in the expected format', () => {
        const result = component.friendlySymptomsDate();
        expect(result).toBe('maandag 17 augustus');
    });
});
