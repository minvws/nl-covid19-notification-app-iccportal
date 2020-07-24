import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-validate-icc-confirm',
  templateUrl: './validate-icc-confirm.component.html',
  styleUrls: ['./validate-icc-confirm.component.scss']
})
export class ValidateIccConfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    backToStart() {
        if (confirm('Weet je zeker dat je deze index wilt annuleren?')) {
          this.router.navigate(['/validate/start']);
        }
    }
}
