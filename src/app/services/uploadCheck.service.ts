import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { IAppConfig, AppConfigService } from './app-config.service';

@Injectable({
    providedIn: 'root'
})
export class UploadCheckService {
    private config: IAppConfig;

    constructor(private readonly http: HttpClient,
        private readonly authenticationService: AuthenticationService,
        appConfigService: AppConfigService) {
        this.config = appConfigService.getConfig();
    }

    private static errorHandler(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        // TODO error handling
        throw error;
    }

    checkUpload(polltoken: string): Observable<any> {
        const serviceUrl = this.config.apiUrl + '/CaregiversPortalApi/v1/labverify';
        const data = {
            PollToken: polltoken
        };
        const headers = {
            headers: {
                'Authorization': 'Bearer ' + this.authenticationService.currentUserValue.authData
            }
        };

        return this.http.post(serviceUrl, data, headers).pipe(catchError(UploadCheckService.errorHandler));
    }
}
