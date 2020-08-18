import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidateIccFinalComponent} from './validate-icc-final.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ValidateIccFinalComponent', () => {
    let component: ValidateIccFinalComponent;
    let fixture: ComponentFixture<ValidateIccFinalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
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
});
