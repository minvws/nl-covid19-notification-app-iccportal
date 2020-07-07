import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {DatePipe, formatDate} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ReportService} from "../../services/report.service";


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
    dateArray: Array<number> = [...Array(22)]
    InfectionConfirmationId: Array<string>
    error_code: number = -1;

    constructor(@Inject(LOCALE_ID) private locale: string, private route: ActivatedRoute, private router: Router, private reportService: ReportService) {
        this.datePipe = new DatePipe(locale)

    }

    ngOnInit(): void {
        this.InfectionConfirmationId = this.route.snapshot.queryParams['labId']
        // console.log(this.route.snapshot)
        // console.log()
        // this.route.params.subscribe(params => {
        //     console.log(params)
        //
        //     // In a real app: dispatch action to load the details here.
        // });
    }

    getFriendlySymptonsDate() {
        return this.datePipe.transform(this.symptonsDate, "EE. d MMM - ")
    }

    getDaysAgo(inputDate: Date): string {
        inputDate = ((inputDate) ? inputDate : this.symptonsDate)
        const daysAgo = (inputDate) ? Math.floor(((Date.now() - (inputDate).valueOf()) / 1000 / 60 / 60 / 24)) : 0;
        return (daysAgo < 1) ? "vandaag" : (daysAgo + " " + ((daysAgo > 1) ? "dagen" : "dag") + " gel.")
    }

    getDayAgo(dayCount: number): Date {
        let today = new Date();
        today.setHours(0)
        today.setMinutes(0)
        today.setSeconds(0)
        today.setMilliseconds(0)
        if (dayCount > 0) {
            return new Date(today.setDate(today.getDate() - dayCount))
        }
        return today
    }

    selectDate(dateDay: number) {
        this.symptonsDate = this.getDayAgo(dateDay)
        this.openDayPicker = false
    }

    confirmLabConfirmationId() {

        this.reportService.confirmLabId(this.InfectionConfirmationId, this.symptonsDate.toISOString()).subscribe((result) => {
            if (result.valid) {
                this.router.navigate(["/validate/confirm"])
            } else {
                this.error_code = 1;
            }
        });


    }
}
