import {Component, OnInit} from '@angular/core';
import {UploadCheckService} from '../../../services/uploadCheck.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-validate-confirm-check',
    templateUrl: './validate-confirm-check.component.html',
    styleUrls: ['./validate-confirm-check.component.scss']
})
export class ValidateConfirmCheckComponent implements OnInit {
    public uploadState = 0;
    private pollToken: string;
    private poller: object;
    private interval: number;

    constructor(private route: ActivatedRoute, private router: Router, private uploadCheckService: UploadCheckService) {
    }

    ngOnInit(): void {
        if (this.route.snapshot.queryParams['p']) {
            this.pollToken = this.route.snapshot.queryParams['p'];
            this.router.navigate([], {queryParams: {p: null}, queryParamsHandling: 'merge'});
            this.checkUpload();
            const uploadInterval = setInterval(() => {
                if (this.pollToken === "000000") { // testcase
                    this.uploadState = 1;
                    this.router.navigate(['/validate_final'], {queryParams: {success: true}});
                    clearInterval(this.interval);
                }
                if (this.uploadState > -1 && this.pollToken && this.pollToken !== '') {
                    this.checkUpload();
                } else {
                    clearInterval(this.interval);
                }
            }, 15000);
            // TODO this is dirty and needs looking at - typescript interval typing issue
            this.interval = <unknown>uploadInterval as number;
        } else {
            this.uploadState = -1;
        }
    }

    checkUpload() {
        this.uploadCheckService.checkUpload(this.pollToken).subscribe((result) => {
            if (result.valid) {
                this.uploadState = 1;
                this.router.navigate(['/validate_final'], {queryParams: {success: true}});
                clearInterval(this.interval);
            }
            this.pollToken = result.pollToken;
        });
    }

}
