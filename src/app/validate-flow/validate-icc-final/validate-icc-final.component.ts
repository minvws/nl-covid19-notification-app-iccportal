import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-validate-icc-final',
    templateUrl: './validate-icc-final.component.html',
    styleUrls: ['./validate-icc-final.component.scss']
})
export class ValidateIccFinalComponent implements OnInit {
    public success = false;
    public symptomsDate: Date;
    private datePipe: DatePipe;

    constructor(@Inject(LOCALE_ID) private locale: string, private route: ActivatedRoute) {
        this.datePipe = new DatePipe(locale);
        if (route.snapshot.queryParams.success) {
            this.success = route.snapshot.queryParams.success;
            window.history.pushState(null, null, 'validate_final');
        }
        if (route.snapshot.queryParams.symptomsDate) {
            this.symptomsDate = new Date(route.snapshot.queryParams.symptomsDate * 1);
        }
    }

    public friendlySymptomsDate(offset: number = 2): string {
        let date = new Date(this.symptomsDate);
        date.setDate(date.getDate() - offset);
        return this.datePipe.transform(date, 'EEEE d MMMM');
    }

    ngOnInit(): void {
    }

}
