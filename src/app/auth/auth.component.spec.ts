import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';
import {AuthenticationService} from "../services";
import {ActivatedRoute, Data} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AppConfigService} from "../services/app-config.service";
import {of} from "rxjs";

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [AuthenticationService, AppConfigService],
            declarations: [AuthComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
