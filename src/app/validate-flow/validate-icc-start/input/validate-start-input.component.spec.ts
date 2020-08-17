import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidateStartInputComponent} from './validate-start-input.component';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppConfigService} from "../../../services/app-config.service";

describe('ValidateStartInputComponent', () => {
    let component: ValidateStartInputComponent;
    let fixture: ComponentFixture<ValidateStartInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                AppConfigService,
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
            imports: [RouterTestingModule, HttpClientTestingModule],
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


    it('getDayAgo returns date on x days ago', () => {
        const daysInPast = 2;
        // testdate = 31 dec 2020
        const inputDate = new Date();
        inputDate.setUTCFullYear(2020)
        inputDate.setUTCMonth(11)
        inputDate.setUTCDate(31)
        inputDate.setUTCHours(4)
        inputDate.setUTCMinutes(2)
        inputDate.setUTCSeconds(2)

        const expectedDate = new Date(2020, 11, 29, 0, 0, 0);
        const result = component.getDayAgo(daysInPast, inputDate);

        expect(result).toEqual(expectedDate);
    });
});
