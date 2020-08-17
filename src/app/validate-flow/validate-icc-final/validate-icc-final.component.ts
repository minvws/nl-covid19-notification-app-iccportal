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
            this.symptomsDate = route.snapshot.queryParams.symptomsDate;
        }
    }

    public friendlySymptomsDate(): string {
        return this.datePipe.transform(this.symptomsDate, 'EEEE d MMMM');
    }

    ngOnInit(): void {
    }

}
