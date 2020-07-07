import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {DatePipe, formatDate} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ReportService} from "../../services/report.service";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";


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
        if (this.route.snapshot.queryParams['p']) {
            this.InfectionConfirmationId = JSON.parse(atob(this.route.snapshot.queryParams['p']))
            this.router.navigate([], {queryParams: {p: null}, queryParamsHandling: 'merge'});
        }
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

    returnErrorToStart() {
        this.router.navigate(["/validate/start"], {
            queryParams: {
                labId: this.InfectionConfirmationId,
                errorCode: 2,
            }
        })
        this.error_code = 2;
    }

    errorHandler(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        this.returnErrorToStart()
        throw error;
    }

    confirmLabConfirmationId() {
        this.reportService.confirmLabId(this.InfectionConfirmationId, this.symptonsDate.toISOString())
            .pipe(catchError((e) => {
                this.returnErrorToStart()
                throw e;
            })).subscribe((result) => {
            if (result.valid === true) {
                this.router.navigate(["/validate/confirm"], {
                    queryParams: {
                        p: this.reportService.getPayload()
                    }
                })
            } else {
                this.returnErrorToStart();
            }
        });


    }
}
