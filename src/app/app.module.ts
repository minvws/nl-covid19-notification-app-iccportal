import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {IccReportComponent} from './icc/report.component';
import {IccGenerateComponent} from './icc/generate.component';
import {ValidateIccComponent} from "./validate-icc/validate-icc.component";
import {ValidateStep1Component} from "./validate-icc/validate-step1/validate-step1.component";
import {StepComponent} from "./validate-icc/step/step.component";
import {ValidateStep2Component} from "./validate-icc/validate-step2/validate-step2.component";
import {ExpansionPanelComponent} from "./validate-icc/expansion-panel/expansion-panel.component";
import {ValidateStep3Component} from "./validate-icc/validate-step3/validate-step3.component";
import {ValidateStep4Component} from "./validate-icc/validate-step4/validate-step4.component";

import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import {ValidateStep5Component} from "./validate-icc/validate-step5/validate-step5.component";

registerLocaleData(localeNL);


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ValidateIccComponent,
        IccReportComponent,
        IccGenerateComponent,
        ValidateStep1Component,
        StepComponent,
        ValidateStep2Component,
        ExpansionPanelComponent,
        ValidateStep3Component,
        ValidateStep4Component,
        ValidateStep5Component
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'validate', component: ValidateIccComponent, pathMatch: 'full'},
            {path: 'icc/report', component: IccReportComponent, pathMatch: 'full'},
            {path: 'icc/generate', component: IccGenerateComponent, pathMatch: 'full'}
        ])
    ],
  providers: [{
        provide: LOCALE_ID, useValue: "nl",
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
