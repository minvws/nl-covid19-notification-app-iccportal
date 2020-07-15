import {AfterViewInit, Component, ElementRef, HostListener, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {DatePipe} from "@angular/common";
import {ReportService} from "../../services/report.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
    selector: 'app-validate-step2',
    templateUrl: './validate-step2.component.html',
    styleUrls: ['./validate-step2.component.scss']
})
export class ValidateStep2Component implements OnInit, AfterViewInit {

    public InfectionConfirmationId: Array<string> = ['', '', '', '', '', ''];
    InvalidState: Array<number> = [];
    @ViewChild('first_char')
    first_char: ElementRef;
    @ViewChild('step_element')
    step_element: ElementRef;
    error_code: number = -1
    deniedMockIds: Array<string> = ['QURS3F', 'G4SYTG', 'LJ4VSG', '2L2587', 'F28TT7', 'JCXY54']
    allowedChars: string = 'BCFGJLQRSTUVXYZ23456789'

    //datepart
    symptonsDate: Date = null
    datePipe: DatePipe;
    openDayPicker: boolean = false
    dateArray: Array<number> = [...Array(22)]


    spelAlphabet: Object = {
        "A": "Anna",
        "B": "Bernard",
        "C": "Cornelis",
        "D": "Dirk",
        "E": "Eduard",
        "F": "Ferdinand",
        "G": "Gerard",
        "H": "Hendrik",
        "I": "Izak",
        "J": "Jan",
        "K": "Karel",
        "L": "Lodewijk",
        "M": "Maria",
        "N": "Nico",
        "O": "Otto",
        "P": "Pieter",
        "Q": "Quotiënt",
        "R": "Rudolf",
        "S": "Simon",
        "T": "Teunis",
        "U": "Utrecht",
        "V": "Victor",
        "W": "Willem",
        "X": "Xantippe",
        "Y": "Y-grec",
        "Z": "Zaandam"
    }


    constructor(@Inject(LOCALE_ID) private locale: string, private route: ActivatedRoute, private router: Router, private reportService: ReportService) {
        this.datePipe = new DatePipe(locale)

    }

    ngAfterViewInit() {

    }

    @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
        if (this.InfectionConfirmationId.join("").length < 1 && window.scrollY > (this.step_element.nativeElement.offsetTop - window.outerHeight + 220)) {
            const firstCharInputElement: HTMLInputElement = this.first_char.nativeElement
            firstCharInputElement.focus()
        }
    }

    ngOnInit(): void {
    }

    public InfectionConfirmationIdValid() {
        return (this.InfectionConfirmationId.join("").length === 6 && this.validateCharacters())
    }

    public InfectionConfirmationIdToTaalString() {
        let output = ""
        this.InfectionConfirmationId.forEach((c, index) => {
            if (index == 3) {
                output += " – "
            }
            if (this.spelAlphabet[c]) {
                output += "<b>" + c + "</b>" + " (" + this.spelAlphabet[c] + ")"
            } else {
                output += "<b>" + c + "</b>";
            }
            output += " ";
        })
        return output;
    }

    removeInvalidState($event: FocusEvent, number: number) {
        const target = $event.target as HTMLInputElement;
        target.select()
        this.InvalidState = this.InvalidState.filter((i) => i !== number)
    }

    validateCharacters(): boolean {
        const matchArray: RegExpMatchArray = this.InfectionConfirmationId.join("").trim().toUpperCase().match("^[" + this.allowedChars + "]+$");
        return matchArray && matchArray.length > 0
    }

    resetInvalidState() {
        this.error_code = -1;
        if (this.InfectionConfirmationId.join("").length > 0 && !this.validateCharacters()) {
            this.error_code = 1;
        }
        if (this.InvalidState.length > 0) this.InvalidState = [];
    }

    focusOnNext(target: Element) {
        if ((target.nextElementSibling) instanceof HTMLInputElement) {
            let nextInput = (target.nextElementSibling) as HTMLInputElement;
            // nextInput.value = newNumber;
            nextInput.focus()
        } else if (target.nextElementSibling !== null) {
            this.focusOnNext(target.nextElementSibling)
        }
    }

    focusOnPrev(target: Element) {
        if ((target.previousElementSibling) instanceof HTMLInputElement) {
            target.previousElementSibling.focus()
        } else if (target.previousElementSibling !== null) {
            this.focusOnPrev(target.previousElementSibling)
        }
    }

    icIdKeyPress($event: KeyboardEvent) {
        const target = $event.target as HTMLInputElement;
        let index = Array.prototype.indexOf.call(target.parentElement.children, target);
        index = (index > 3) ? index - 1 : index;

        if ($event.code === 'ArrowRight') {
            this.focusOnNext(target)
        } else if ($event.code === 'ArrowLeft') {
            this.focusOnPrev(target)
        } else if ($event.code === 'Backspace') {
            target.value = ""
            this.focusOnPrev(target)
        } else if ($event.code === 'Enter') {
            // this.submitIccId()la
            this.openDayPicker = true;
        } else {
            if ([...target.value].length > 1) {
                target.value = target.value[target.value.length - 1]; // prevent fast overfilling
            }
            if (target.value.length > 0) {
                target.value = target.value.toUpperCase()
                this.focusOnNext(target)
            }
        }
        // sync with model
        this.InfectionConfirmationId[index] = target.value
    }

    getFriendlySymptonsDate() {
        return this.datePipe.transform(this.symptonsDate, "EE. d MMM - ")
    }

    getDaysAgo(inputDate: Date = null): string {
        inputDate = ((inputDate != null) ? inputDate : this.symptonsDate)
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


    errorHandler(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        this.error_code = 2;
        throw error;
    }

    confirmLabConfirmationId() {
        if (this.InfectionConfirmationIdValid()) {
            this.reportService.confirmLabId(this.InfectionConfirmationId, this.symptonsDate.toISOString())
                .pipe(catchError((e) => {
                    this.error_code = 2;
                    throw e;
                })).subscribe((result) => {
                if (result.valid === true) {
                    this.router.navigate(["/validate/confirm"], {
                        queryParams: {
                            p: result.pollToken
                        }
                    })
                } else {
                    this.error_code = 2
                }
            });
        } else {
            this.error_code = 1
        }
        if (this.error_code > -1) {
            for (let i = 0; i < 7; i++) {
                this.InvalidState.push(i)
            }
        }
    }


}
