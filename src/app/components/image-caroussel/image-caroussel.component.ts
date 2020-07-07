import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-caroussel',
    templateUrl: './image-caroussel.component.html',
    styleUrls: ['./image-caroussel.component.scss']
})
export class ImageCarousselComponent implements OnInit {
    @Input() images: Array<Object>;
    @Input() additionalStyle: string;

    popupActive: boolean = false
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if(event.key === 'Escape'){
            this.popupActive  = false;
        }
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
