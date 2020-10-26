import {AfterViewInit, Component, ElementRef, HostListener, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {DatePipe} from '@angular/common';
import {LabConfirmService} from '../../../services/lab-confirm.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
    selector: 'app-validate-step2',
    templateUrl: './validate-start-input.component.html',
    styleUrls: ['./validate-start-input.component.scss']
})
export class ValidateStartInputComponent implements OnInit, AfterViewInit {

    public LabConfirmationId: Array<string> = ['', '', '', '', '', ''];
    private LastConfirmedLCId: Array<string> = ['', '', '', '', '', ''];
    InvalidState: Array<number> = [];
    @ViewChild('first_char')
    first_char: ElementRef;

    @ViewChild('step_element')
    step_element: ElementRef;
    error_code = -1;
    allowedChars = 'BCFGJLQRSTUVXYZ23456789';
    loading = 0;

    // datepart
    showSymptoms = true;

    private todayDate: Date = new Date();
    symptomsDate: Date = null;
    datePipe: DatePipe;
    openDayPicker = false;
    dateArray: Array<number> = [...Array(22)];

    demoMode = false;

    spelAlphabet: Object = {
        'A': 'Anna',
        'B': 'Bernard',
        'C': 'Cornelis',
        'D': 'Dirk',
        'E': 'Eduard',
        'F': 'Ferdinand',
        'G': 'Gerard',
        'H': 'Hendrik',
        'I': 'Izak',
        'J': 'Jan',
        'K': 'Karel',
        'L': 'Lodewijk',
        'M': 'Maria',
        'N': 'Nico',
        'O': 'Otto',
        'P': 'Pieter',
        'Q': 'Quotiënt',
        'R': 'Rudolf',
        'S': 'Simon',
        'T': 'Teunis',
        'U': 'Utrecht',
        'V': 'Victor',
        'W': 'Willem',
        'X': 'Xantippe',
        'Y': 'Y-grec',
        'Z': 'Zaandam'
    };

    constructor(
        @Inject(LOCALE_ID) private locale: string,
        private route: ActivatedRoute,
        private router: Router,
        private reportService: LabConfirmService) {
        this.datePipe = new DatePipe(locale);
    }

    ngAfterViewInit() {
    }

    @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
        const y = (this.step_element.nativeElement.offsetTop - window.outerHeight + 220);
        if (this.LabConfirmationId.join('').length < 1 && window.scrollY > y) {
            const firstCharInputElement: HTMLInputElement = this.first_char.nativeElement;
            firstCharInputElement.focus();
        }
    }

    ngOnInit(): void {
    }

    public InfectionConfirmationIdValid() {
        return (this.labConfirmationIdJoined().length === 6 && this.validateCharacters());
    }

    public InfectionConfirmationIdToTaalString() {
        let output = '';
        this.LabConfirmationId.forEach((c, index) => {
            if (index === 3) {
                output += ' – ';
            }
            if (this.spelAlphabet[c]) {
                output += '<b>' + c + '</b>' + ' (' + this.spelAlphabet[c] + ')';
            } else {
                output += '<b>' + c + '</b>';
            }
            output += ' ';
        });
        return output;
    }

    removeInvalidState($event: FocusEvent, number: number) {
        const target = $event.target as HTMLInputElement;
        target.select();
        this.InvalidState = this.InvalidState.filter((i) => i !== number);
    }

    labConfirmationIdJoined() {
        return this.LabConfirmationId.join('').trim().toUpperCase();
    }

    validateCharacters(): boolean {
        const matchArray: RegExpMatchArray = this.labConfirmationIdJoined().match('^[' + this.allowedChars + ']+$');
        return matchArray && matchArray.length > 0;
    }

    resetInvalidState() {
        this.error_code = -1;
        if (this.labConfirmationIdJoined().length > 0 && !this.validateCharacters()) {
            this.error_code = 1;
        }
        if (this.labConfirmationIdJoined() === '000000') {
            this.demoMode = true;
        }
        if (this.InvalidState.length > 0) {
            this.InvalidState = [];
        }
    }

    focusOnNext(target: Element) {
        if ((target.nextElementSibling) instanceof HTMLInputElement) {
            const nextInput = (target.nextElementSibling) as HTMLInputElement;
            // nextInput.value = newNumber;
            nextInput.focus();
        } else if (target.nextElementSibling !== null) {
            this.focusOnNext(target.nextElementSibling);
        }
    }

    focusOnPrev(target: Element) {
        if ((target.previousElementSibling) instanceof HTMLInputElement) {
            target.previousElementSibling.focus();
        } else if (target.previousElementSibling !== null) {
            this.focusOnPrev(target.previousElementSibling);
        }
    }

    icIdKeyPress($event: KeyboardEvent) {
        const target = $event.target as HTMLInputElement;
        let index = Array.prototype.indexOf.call(target.parentElement.children, target);
        index = (index > 3) ? index - 1 : index;

        if ($event.code === 'ArrowRight') {
            this.focusOnNext(target);
        } else if ($event.code === 'ArrowLeft') {
            this.focusOnPrev(target);
        } else if ($event.code === 'Backspace') {
            target.value = '';
            this.focusOnPrev(target);
        } else if ($event.code === 'Enter') {
            // this.submitIccId()la
            this.openDayPicker = true;
        } else {
            if ([...target.value].length > 1) {
                target.value = target.value[target.value.length - 1]; // prevent fast overfilling
            }
            if (target.value.length > 0) {
                target.value = target.value.toUpperCase();
                this.focusOnNext(target);
            }
        }
        // sync with model
        this.LabConfirmationId[index] = target.value;
    }

    getFriendlySymptomsDate(format: string = 'EE. d MMM - ', offset: number = 0) {
        let date = this.symptomsDate;
        if (date) {
            date = new Date(this.symptomsDate.valueOf());
            date.setDate(date.getDate() - offset);
        }
        return this.datePipe.transform(date, format);
    }

    getDaysAgo(inputDate: Date = null): string {
        inputDate = ((inputDate != null) ? inputDate : this.symptomsDate);
        const daysAgo = (inputDate) ? Math.floor(((Date.now() - (inputDate).valueOf()) / 1000 / 60 / 60 / 24)) : 0;
        return (daysAgo < 1) ? 'vandaag' : (daysAgo + ' ' + ((daysAgo > 1) ? 'dagen' : 'dag') + ' gel.');
    }

    getDayAgo(dayCount: number, inputDate: Date = null): Date {

        if (inputDate == null) {
            inputDate = this.todayDate;
        }

        const startOfDay = new Date(
            Date.UTC(
                inputDate.getUTCFullYear(),
                inputDate.getUTCMonth(),
                inputDate.getUTCDate(),
                0,
                0,
                0,
                0
            )
        );

        if (dayCount > 0) {
            return new Date(startOfDay.setDate(startOfDay.getDate() - dayCount));
        }
        return startOfDay;
    }

    selectDate(dateDay: number) {
        this.symptomsDate = this.getDayAgo(dateDay);
        this.openDayPicker = false;
    }
    confirmLabConfirmationId() {
        if (this.labConfirmationIdJoined() === '000000') {
            this.router.navigate(['/validate/confirm'], {
                queryParams: {
                    p: `demo_polltoken_test_000000`,
                    symptomsDate: this.symptomsDate.valueOf()
                }
            });
        }
        if (this.InfectionConfirmationIdValid()) {
            this.loading++;
            this.reportService.confirmLabId(this.LabConfirmationId, this.symptomsDate.toISOString())
                .pipe(catchError((e) => {
                    this.loading--;
                    this.error_code = 2;
                    throw e;
                })).subscribe((result) => {
                this.loading--;
                if (result.valid === true) {
                    this.router.navigate(['/validate/confirm'], {
                        queryParams: {
                            p: result.pollToken,
                            symptomsDate: this.symptomsDate.valueOf()
                        }
                    });
                } else {
                    this.error_code = 2;
                }
            });
        } else {
            this.error_code = 1;
        }
        if (this.error_code > -1) {
            for (let i = 0; i < 7; i++) {
                this.InvalidState.push(i);
            }
        }
    }
}
