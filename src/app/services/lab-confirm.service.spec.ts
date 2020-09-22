import {TestBed} from '@angular/core/testing';
import {LabConfirmService} from './lab-confirm.service';
import {AppConfigService} from './app-config.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppConfigTestService} from './app-config.test.service';
import {AuthenticationService} from './authentication.service';
import {AuthenticationTestService} from './authentication_test.service';

describe('LabConfirmServiceService', () => {
    let service: LabConfirmService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [LabConfirmService, {
                provide: AppConfigService,
                useClass: AppConfigTestService,
            }, {provide: AuthenticationService, useClass: AuthenticationTestService}]
        });
        const appConfigService = TestBed.inject(AppConfigService);
        appConfigService.loadAppConfig();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(LabConfirmService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });


    it('labConfirm returned Observable should match the right data', () => {
        const mockLabConfirmationId = ['0', '0', '0', '0', '0', '0'];
        const mockDateOfSymptomsOnset = new Date().toISOString();
        const mockResponse = {
            active: true,
            pollToken: 'first_polltoken_123'
        };

        service.confirmLabId(mockLabConfirmationId, mockDateOfSymptomsOnset).subscribe(result => {
            expect(result.active).toEqual(true);
            expect(result.pollToken).toEqual('first_polltoken_123');
        });

        const req = httpTestingController.expectOne('http://coronamelder.test/CaregiversPortalApi/v1/labconfirm');
        req.flush(mockResponse);
    });
});
