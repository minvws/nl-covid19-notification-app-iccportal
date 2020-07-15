import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from "../services";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.authenticationService.fetchCurrentUser();
        // return this.authenticationService.fetchCurrentUser().subscribe(result => {
        //     if (result) {
        //         return true
        //     }
        //     this.router.navigate([''], {queryParams: {returnUrl: state.url}});
        //     return false;
        // })
    }
}
