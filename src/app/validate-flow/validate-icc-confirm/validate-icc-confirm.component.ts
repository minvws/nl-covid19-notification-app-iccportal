import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-validate-icc-confirm',
    templateUrl: './validate-icc-confirm.component.html',
    styleUrls: ['./validate-icc-confirm.component.scss']
})
export class ValidateIccConfirmComponent implements OnInit {
    public success = false;
    public symptomsDate: Date;
    private datePipe: DatePipe;

    constructor(@Inject(LOCALE_ID) private locale: string, private router: Router, private route: ActivatedRoute) {
        this.datePipe = new DatePipe(locale);
        if (route.snapshot.queryParams.symptomsDate) {
            window.history.pushState(null, null, 'validate/confirm');
            const queryParamSymptomsDate = parseInt(route.snapshot.queryParams.symptomsDate, 0);
            if (Number.isInteger(queryParamSymptomsDate)) {
                this.symptomsDate = new Date(queryParamSymptomsDate);
            }
        }
    }

    ngOnInit(): void {
    }

    backToStart() {
        if (confirm('Weet je zeker dat je deze index wilt annuleren?')) {
            this.router.navigate(['/validate/start']);
        }
    }


    public friendlySymptomsDate(offset: number = 2): string {
        if (!this.symptomsDate) {
            return '';
        }
        const date = new Date(this.symptomsDate);
        date.setDate(date.getDate() - offset);
        return this.datePipe.transform(date, 'EEEE d MMMM');
    }


}
