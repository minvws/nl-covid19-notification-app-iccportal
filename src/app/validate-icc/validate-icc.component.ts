import {Component, OnInit} from '@angular/core';
import {TitleService} from "../services/title.service";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../services";

@Component({
    selector: 'app-validate-icc',
    templateUrl: './validate-icc.component.html',
    styleUrls: ['./validate-icc.component.scss']
})
export class ValidateIccComponent implements OnInit {

    public InfectionConfirmationId: Array<string> = ['', '', '', '', '', ''];
    public InfectionConfirmationIdIsValid: boolean = false
    public IndexIsSubmitted: boolean = false

    constructor(public titleService: TitleService, public authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
    }
}
