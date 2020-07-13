import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthenticationService} from "../services";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    public error_code: number = -1;

    constructor(private route: ActivatedRoute, private authentication: AuthenticationService, private router: Router) {
    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            if (params['token']) {
                if (this.authentication.login(params['token'])) {
                    this.router.navigate(["validate/start"]);
                } else {
                    this.error_code = 1;
                    // setTimeout(function () {
                    this.router.navigate([""], {queryParams: {e: "access_token_invalid"}});
                    // }, 2)
                }
            }
        });
    }

}