import {Component, OnInit} from '@angular/core';
import {TitleService} from "../services/title.service";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-validate-icc',
    templateUrl: './validate-icc.component.html',
    styleUrls: ['./validate-icc.component.scss']
})
export class ValidateIccComponent implements OnInit {

    public InfectionConfirmationId: Array<string> = ['', '', '', '', '', ''];
    public InfectionConfirmationIdIsValid: boolean = false
    public IndexIsSubmitted: boolean = false
    userInfo: { displayName: string, emailAddress: string };

    constructor(public titleService: TitleService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            if (params['c']) {
                const claims = JSON.parse(atob(params['c']));
                this.userInfo = {
                    displayName: claims["http://schemas.u2uconsult.com/ws/2014/04/identity/claims/displayname"],
                    emailAddress: claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
                }
            }
        });

    }

    logout() {
        window.location.href = "https://" + environment.authHost + "/Auth/Logout";
    }
}
