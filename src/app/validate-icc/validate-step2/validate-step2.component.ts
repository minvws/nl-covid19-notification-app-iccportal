import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-validate-step2',
    templateUrl: './validate-step2.component.html',
    styleUrls: ['./validate-step2.component.scss']
})
export class ValidateStep2Component implements OnInit {

    public InfectionConfirmationId: Array<string> = ['', '', '', '', '', ''];
    InvalidState: Array<number> = [];

    constructor() {
    }


    public getFormattedIccId() {
        return this.InfectionConfirmationId.map((part, i) => (i == 1 || i == 3) ? part + "-" : part).join('');
    }

    public submitIccId() {
        // UI Test purposes
        for (let i = 0; i < 7; i++) {
            this.InvalidState.push(i)
        }
    }

    removeInvalidState(number: number) {
        this.InvalidState = this.InvalidState.filter((i) => i !== number)
    }

    resetInvalidState() {
        if(this.InvalidState.length > 0) this.InvalidState = [];
    }

    ngOnInit(): void {
    }
}
