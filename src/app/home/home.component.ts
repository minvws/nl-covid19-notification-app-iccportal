import {Component} from '@angular/core';
import {TitleService} from "../services/tile.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public constructor(private titleService: TitleService) {
        titleService.setTitle("Home")
    }
}
