import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  private data;

  constructor(private readonly http: HttpClient, private readonly authenticationService: AuthenticationService) { }

  getPayload(){
    return btoa(JSON.stringify(this.data));
  }

  confirmLabId(labConfirmationIds: Array<string>, dateOfSymptomsOnset: string): Observable<any> {
    const serviceUrl = environment.apiUrl + '/CaregiversPortalApi/v1/labconfirm';
    this.data = {
      'LabConfirmationID': labConfirmationIds.join(""),
      'DateOfSymptomsOnset': dateOfSymptomsOnset
    };
    const headers = {
      headers: {
        'Authorization': "Bearer " + this.authenticationService.currentUserValue.authData
      }
    };

    return this.http.post(serviceUrl, this.data, headers).pipe(catchError(ReportService.errorHandler));
  }

  private static errorHandler(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
    // TODO error handling
    throw error;
  }
}
