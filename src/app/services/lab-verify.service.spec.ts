import {TestBed} from '@angular/core/testing';

import {LabVerifyService} from './lab-verify.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppConfigService} from './app-config.service';

describe('LabVerifyServiceService', () => {
  let service: LabVerifyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LabVerifyService, HttpClient, HttpHandler, AppConfigService]
    });
    service = TestBed.inject(LabVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
