import {TestBed} from '@angular/core/testing';

import {LabConfirmService} from './lab-confirm.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('LabConfirmServiceService', () => {
  let service: LabConfirmService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabConfirmService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(LabConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
