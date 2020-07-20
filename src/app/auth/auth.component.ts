import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    public error_code = -1;

    constructor(private route: ActivatedRoute, private authentication: AuthenticationService, private router: Router) {
    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            if (params['token']) {
                if (this.authentication.login(params['token'])) {
                    this.router.navigate(['validate/start']);
                } else {
                    this.error_code = 1;
                    this.router.navigate([''], {queryParams: {e: 'access_token_invalid'}});
                }
            }
        });
    }

}
