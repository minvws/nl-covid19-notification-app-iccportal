import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class UploadCheckService {

    constructor(private readonly http: HttpClient, private readonly authenticationService: AuthenticationService) {
    }

    checkUpload(payload: string): Observable<any> {
        const serviceUrl = environment.apiUrl + '/CaregiversPortalApi/v1/labuploaded';
        const data = JSON.parse(atob(payload));
        const headers = {
            headers: {
                'Authorization': "Bearer " + this.authenticationService.currentUserValue.authData
            }
        };

        return this.http.post(serviceUrl, data, headers).pipe(catchError(UploadCheckService.errorHandler));
    }

    private static errorHandler(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        // TODO error handling
        throw error;
    }
}
