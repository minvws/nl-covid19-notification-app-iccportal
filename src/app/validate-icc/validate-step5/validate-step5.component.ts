import {Component, OnInit} from '@angular/core';
import {UploadCheckService} from "../../services/uploadCheck.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-validate-step5',
    templateUrl: './validate-step5.component.html',
    styleUrls: ['./validate-step5.component.scss']
})
export class ValidateStep5Component implements OnInit {
    public uploadState: number = 0;
    private pollToken: string;

    constructor(private route: ActivatedRoute, private router: Router, private uploadCheckService: UploadCheckService) {
    }


    ngOnInit(): void {

        // MOCK!!!!

        setTimeout(()=>{
            this.uploadState = 1;
        }, 12000)


        // MOCK!!!!
        // if (this.route.snapshot.queryParams['p']) {
        //     this.pollToken = this.route.snapshot.queryParams['p']
        //     this.router.navigate([], {queryParams: {p: null}, queryParamsHandling: 'merge'});
        //     this.checkUpload()
        //     const interval = setInterval(() => {
        //         if (this.uploadState > -1 && this.pollToken && this.pollToken != "") {
        //             this.checkUpload()
        //         } else {
        //             clearInterval(interval)
        //         }
        //     }, 7000);
        // } else {
        //     this.uploadState = -1;
        // }
    }

    checkUpload() {
        this.uploadCheckService.checkUpload(this.pollToken).subscribe((result) => {
            if (result.valid) {
                this.uploadState = 1
            }
            this.pollToken = result.pollToken;

        })
    }

}
