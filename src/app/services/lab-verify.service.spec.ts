import {TestBed} from '@angular/core/testing';
import {LabVerifyService} from './lab-verify.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppConfigTestService} from './app-config.test.service';
import {AppConfigService} from './app-config.service';
import {AuthenticationTestService} from './authenticationTestService';
import {AuthenticationService} from './authentication.service';

describe('LabVerifyServiceService', () => {
    let service: LabVerifyService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [LabVerifyService, {
                provide: AppConfigService,
                useClass: AppConfigTestService,
            }, {provide: AuthenticationService, useClass: AuthenticationTestService}
            ],
        });
        const appConfigService = TestBed.inject(AppConfigService);
        appConfigService.loadAppConfig();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(LabVerifyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('labVerify returned Observable should match the right data', () => {

        const pollToken = 'test_polltoken_123';
        const mockResponse = {
            active: false,
            pollToken: 'refreshed_polltoken_456'
        };

        service.labVerify(pollToken).subscribe(result => {
            expect(result.active).toEqual(false);
            expect(result.pollToken).toEqual('refreshed_polltoken_456');
        });

        const req = httpTestingController.expectOne('http://coronamelder.test/CaregiversPortalApi/v1/labverify');
        req.flush(mockResponse);
    });

});

