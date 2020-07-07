import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-validate-step1',
    templateUrl: './validate-step1.component.html',
    styleUrls: ['./validate-step1.component.scss']
})
export class ValidateStep1Component implements OnInit {


    images: Array<Object> = [
        {
            "text": "Open de app en\n scroll naar beneden",
            "image": "assets/images/Screen 1.png",
        },
        {
            "text": "Druk op ‘ik heb corona\n en ben getest’",
            "image": "assets/images/Screen 2.png",
        },
        {
            "text": "Druk op ‘ik heb corona\n en ben getest’",
            "image": "assets/images/Screen 3.png",
        },
        {
            "text": "Geef het tijdelijke wachtwoord door",
            "image": "assets/images/Screen 4.png",
        }
    ]


    constructor() {
    }

    ngOnInit(): void {
    }

}
