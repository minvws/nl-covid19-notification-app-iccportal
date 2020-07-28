import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-validate-icc-final',
    templateUrl: './validate-icc-final.component.html',
    styleUrls: ['./validate-icc-final.component.scss']
})
export class ValidateIccFinalComponent implements OnInit {
    public success = false;

    constructor(private route: ActivatedRoute) {
        if (route.snapshot.queryParams.success) {
            this.success = route.snapshot.queryParams.success;
            window.history.pushState(null, null, 'validate_final');
        }
    }

    ngOnInit(): void {
    }

}
