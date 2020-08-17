import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidateConfirmCheckComponent} from './validate-confirm-check.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppConfigService} from '../../../services/app-config.service';

describe('ValidateConfirmCheckComponent', () => {
    let component: ValidateConfirmCheckComponent;
    let fixture: ComponentFixture<ValidateConfirmCheckComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [AppConfigService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            queryParams: of({
                                get: v => {
                                    return {
                                        p: '',
                                        symptomsDate: null
                                    };
                                }
                            })
                        }
                    }
                }
            ],
            declarations: [ValidateConfirmCheckComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ValidateConfirmCheckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
