import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConfigService} from "./app-config.service";
import {AuthenticationService} from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class LabVerifyService {
    constructor(private readonly http: HttpClient,
        private readonly authenticationService: AuthenticationService,
        private readonly appConfigService: AppConfigService) {
    }

    private static errorHandler(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        // TODO error handling
        throw error;
    }

    labVerify(polltoken: string): Observable<any> {
        const serviceUrl = this.appConfigService.getConfig().apiUrl + '/CaregiversPortalApi/v1/labverify';
        const data = {
            PollToken: polltoken
        };
        const headers = {
            headers: {
                'Authorization': 'Bearer ' + this.authenticationService.currentUserValue.authData
            }
        };

        return this.http.post(serviceUrl, data, headers).pipe(catchError(LabVerifyService.errorHandler));
    }
}
