import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-validate-step1',
    templateUrl: './validate-step1.component.html',
    styleUrls: ['./validate-step1.component.scss']
})
export class ValidateStep1Component implements OnInit {


    images: Array<Object> = [
        {
            "text": "Zoek de CoronaMelder app",
            "image": "assets/images/Screen 1.png",
        },
        {
            "text": "Open de app en scroll naar beneden",
            "image": "assets/images/Screen 2.png",
        },
        {
            "text": "Druk op ‘Mijn GGD-sleutel’",
            "image": "assets/images/Screen 3.png",
        },
        {
            "text": "Ga naar de GGD-sleutel",
            "image": "assets/images/Screen 4.png",
        },
        {
            "text": "Geef de tijdelijkse GGD-sleutel door",
            "image": "assets/images/Screen 5.png",
        }
    ]


    constructor() {
    }

    ngOnInit(): void {
    }

}
