import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {DatePipe, formatDate} from "@angular/common";


@Component({
    selector: 'app-validate-step3',
    templateUrl: './validate-step3.component.html',
    styleUrls: ['./validate-step3.component.scss']
})
export class ValidateStep3Component implements OnInit {

    showsSymptons: boolean = null
    symptonsDate: string = null
    datePipe: DatePipe;

    constructor(@Inject(LOCALE_ID) private locale: string) {
        this.datePipe = new DatePipe(locale)
    }

    ngOnInit(): void {
    }

    isValidDate() {
        return this.symptonsDate && Date.parse(this.symptonsDate) < Date.now()
    }

    getFriendlySymptonsDate() {
        if (this.isValidDate()) {
            return this.datePipe.transform(this.symptonsDate, "EE. d MMM - ")
        }
        return "Geen geldige datum geselecteerd"
    }

    getDaysAgo() {
        const daysAgo = Math.floor(((Date.now() - Date.parse(this.symptonsDate)) / 1000 / 60 / 60 / 24))
        return this.isValidDate() ? ((daysAgo < 1) ? "vandaag" : (daysAgo + " " + ((daysAgo > 1) ? "dagen" : "dag") + " gel.")) : ""
    }
}
