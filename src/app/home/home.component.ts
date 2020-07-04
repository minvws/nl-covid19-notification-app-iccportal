import {Component} from '@angular/core';
import {TitleService} from "../services/title.service";
import {environment} from "../../environments/environment.prod";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public constructor(private router: Router, private titleService: TitleService) {
        titleService.setTitle("Home")
    }

    authorize() {
        window.location.href = "https://" + environment.authHost + "/Auth/Redirect";
    }
}
