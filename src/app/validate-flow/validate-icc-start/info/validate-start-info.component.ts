import {Component, OnInit} from '@angular/core';
import {CarousselImage} from '../../../models/caroussel-image';

@Component({
    selector: 'app-validate-step1',
    templateUrl: './validate-start-info.component.html',
    styleUrls: ['./validate-start-info.component.scss']
})
export class ValidateStartInfoComponent implements OnInit {

    images: Array<CarousselImage> = [
        {
            text: 'Zet telefoon op luidspreker en open CoronaMelder-app.',
            image: 'assets/images/Screen 0.png',
            small: true
        },
        {
            text: 'Open de app en scroll naar beneden',
            image: 'assets/images/Screen 1.png',
        },
        {
            text: 'Druk op ‘GGD-sleutel doorgeven’',
            image: 'assets/images/Screen 2.png',
        },
        {
            text: 'Geef de tijdelijke GGD-sleutel door',
            image: 'assets/images/Screen 3.png',
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
