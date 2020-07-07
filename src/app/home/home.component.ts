import {Component, OnInit} from '@angular/core';
import {TitleService} from "../services/title.service";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    public constructor(private router: Router, public titleService: TitleService, private authentication: AuthenticationService) {
        titleService.setTitle("Home")
    }
    ngOnInit(): void {
        if(this.authentication.currentUser){
            this.router.navigate(["validate/start"]);
        }
    }
    authorize() {
        window.location.href = "https://" + environment.authHost + "/Auth/Redirect";
    }
}
