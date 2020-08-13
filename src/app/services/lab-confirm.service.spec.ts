import {TestBed} from '@angular/core/testing';
import {LabConfirmService} from './lab-confirm.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {AppConfigService} from "./app-config.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('LabConfirmServiceService', () => {
    let service: LabConfirmService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [AppConfigService, LabConfirmService, HttpClient, HttpHandler]
        });
        service = TestBed.inject(LabConfirmService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
