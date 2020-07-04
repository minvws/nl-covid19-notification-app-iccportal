import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {DatePipe, formatDate} from "@angular/common";


@Component({
    selector: 'app-validate-step3',
    templateUrl: './validate-step3.component.html',
    styleUrls: ['./validate-step3.component.scss']
})
export class ValidateStep3Component implements OnInit {

    showsSymptons: boolean = true
    symptonsDate: Date = null
    datePipe: DatePipe;
    openDayPicker: boolean = false
    dateArray: Array<number> = [...Array(15)]

    constructor(@Inject(LOCALE_ID) private locale: string) {
        this.datePipe = new DatePipe(locale)
    }

    ngOnInit(): void {
    }


    getFriendlySymptonsDate() {
        return this.datePipe.transform(this.symptonsDate, "EE. d MMM - ")
    }

    getDaysAgo(): string {
        const daysAgo = (this.symptonsDate) ? Math.floor(((Date.now() - (this.symptonsDate).valueOf()) / 1000 / 60 / 60 / 24)) : 0;
        return (daysAgo < 1) ? "vandaag" : (daysAgo + " " + ((daysAgo > 1) ? "dagen" : "dag") + " gel.")
    }

    getDayAgo(dayCount: number): Date {
        let today = new Date();
        if (dayCount > 0) {
            return new Date(today.setDate(today.getDate() - dayCount))
        }
        return today
    }

    selectDate(dateDay: number) {
        this.symptonsDate = this.getDayAgo(dateDay)
        this.openDayPicker = false
    }
}
