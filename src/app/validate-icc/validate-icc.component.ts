import {Component, HostListener, OnInit} from '@angular/core';
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
    public scrollDown: boolean = false


    constructor(public titleService: TitleService, public authenticationService: AuthenticationService) {
    }

    @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
        if (window.scrollY > 40) {
            this.scrollDown = true
        } else {
            this.scrollDown = false;
        }
    }

    ngOnInit(): void {

    }
}
