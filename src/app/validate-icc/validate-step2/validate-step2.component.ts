import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-validate-step2',
    templateUrl: './validate-step2.component.html',
    styleUrls: ['./validate-step2.component.scss']
})
export class ValidateStep2Component implements OnInit, AfterViewInit {

    public InfectionConfirmationId: Array<string> = ['', '', '-', '', '', '-', '', ''];
    InvalidState: Array<number> = [];
    @ViewChild('first_char')
    first_char: ElementRef;

    constructor(private router: Router) {
    }
    ngAfterViewInit() {
        const firstCharInputElement: HTMLInputElement = this.first_char.nativeElement
        firstCharInputElement.focus()
    }
    ngOnInit(): void {
    }

    public getFormattedIccId() {
        return this.InfectionConfirmationId.map((part, i) => (i == 1 || i == 3) ? part + "-" : part).join('');
    }

    public submitIccId() {
        // // UI Test purposes
        // for (let i = 0; i < 7; i++) {
        //     this.InvalidState.push(i)
        // }
        this.router.navigate(["validate", "symptons"]);
    }

    removeInvalidState($event: FocusEvent, number: number) {
        const target = $event.target as HTMLInputElement;
        target.select()
        this.InvalidState = this.InvalidState.filter((i) => i !== number)
    }

    resetInvalidState() {
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
        const index = Array.prototype.indexOf.call(target.parentElement.children, target);

        if ($event.code === 'ArrowRight') {
            this.focusOnNext(target)
        } else if ($event.code === 'ArrowLeft') {
            this.focusOnPrev(target)
        } else if ($event.code === 'Backspace') {
            target.value = ""
            this.focusOnPrev(target)
        }else if ($event.code === 'Enter'){
            this.submitIccId()
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

}
