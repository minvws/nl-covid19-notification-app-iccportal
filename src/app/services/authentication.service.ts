import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User} from '../models';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppConfigService, IAppConfig } from './app-config.service';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    private config: IAppConfig;
    public currentUser: Observable<User>;

    private static decodeToken({ jwtToken, helper = null }: { jwtToken: string; helper?: JwtHelperService; }): object {
        helper = (helper) ? helper : new JwtHelperService();
        if (!helper.isTokenExpired(jwtToken)) {
            return helper.decodeToken(jwtToken);
        }
        return null;
    }

    private static parsePayloadToUser(jwtToken: string, payload: any): User {
        if (payload && payload.id) {
            return {
                displayName: payload.name,
                email: payload.email,
                id: payload.id,
                authData: jwtToken
            };
        }
        return null;
    }

    constructor(private http: HttpClient, private router: Router, appConfigService: AppConfigService) {
        const jwtToken = localStorage.getItem('auth');
        const decodedToken = AuthenticationService.decodeToken({ jwtToken: localStorage.getItem('auth') });
        this.currentUserSubject = new BehaviorSubject<User>(AuthenticationService.parsePayloadToUser(jwtToken, decodedToken));
        this.currentUser = this.currentUserSubject.asObservable();
        this.config = appConfigService.getConfig();
    }

    public fetchCurrentUser(): Observable<any> {
        const serviceUrl = 'https://' + this.config.authHost + '/user/@me';
        const headers = {
            headers: {
                'Authorization': 'Bearer ' + ((this.currentUserValue !== null) ? this.currentUserValue.authData : '')
            }
        };
        return this.http.get<any>(serviceUrl, headers).pipe(
            map(response => {
                if(response.user.id === this.currentUserValue.id){
                    return true;
                }
                return this.router.parseUrl('');
            }),
            catchError(error => {
                this.logout();
                return of(false);
            })
        );
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public login(jwtToken: string): boolean {
        const helper = new JwtHelperService();
        if (!helper.isTokenExpired(jwtToken)) {
            const decodedToken = AuthenticationService.decodeToken({ jwtToken });
            this.currentUserSubject.next(AuthenticationService.parsePayloadToUser(jwtToken, decodedToken));
            localStorage.setItem('auth', jwtToken);
            return true;
        }
        return false;
    }

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('auth');
        this.currentUserSubject.next(null);

        window.location.href = 'https://' + this.config.authHost + '/Auth/Logout';
    }

    public redirectToAuthorization() {
        window.location.href = 'https://' + this.config.authHost + '/Auth/Redirect';
}
}
