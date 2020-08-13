import {TestBed} from '@angular/core/testing';

import {LabVerifyService} from './lab-verify.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('LabVerifyServiceService', () => {
  let service: LabVerifyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabVerifyService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(LabVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
