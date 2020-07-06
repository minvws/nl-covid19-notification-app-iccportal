import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-validate-step5',
    templateUrl: './validate-step5.component.html',
    styleUrls: ['./validate-step5.component.scss']
})
export class ValidateStep5Component implements OnInit {
    private uploadSuccessfull: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.uploadSuccessfull = true
        }, 7000)
    }

}
