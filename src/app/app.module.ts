import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {IccReportComponent} from './icc/report.component';
import {IccGenerateComponent} from './icc/generate.component';
import {ValidateIccComponent} from "./validate-icc/validate-icc.component";
import {ValidateStep1Component} from "./validate-icc/validate-step1/validate-step1.component";
import {StepComponent} from "./components/step/step.component";
import {ValidateStep2Component} from "./validate-icc/validate-step2/validate-step2.component";
import {ExpansionPanelComponent} from "./components/expansion-panel/expansion-panel.component";
import {ValidateStep3Component} from "./validate-icc/validate-step3/validate-step3.component";
import {ValidateStep4Component} from "./validate-icc/validate-step4/validate-step4.component";

import {registerLocaleData} from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import {ValidateStep5Component} from "./validate-icc/validate-step5/validate-step5.component";
import {ValidateIccConfirmComponent} from "./validate-icc/validate-icc-confirm/validate-icc-confirm.component";
import {ValidateIccStartComponent} from "./validate-icc/validate-icc-start/validate-icc-start.component";
import {ValidateIccSymptonsComponent} from "./validate-icc/validate-icc-symptons/validate-icc-symptons.component";
import {ValidateIccFinalComponent} from "./validate-icc/validate-icc-final/validate-icc-final.component";
import {AuthGuard, BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider} from "./helpers";
import {ImageCarousselComponent} from "./components/image-caroussel/image-caroussel.component";

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
        ValidateStep5Component,
        ValidateIccConfirmComponent,
        ValidateIccStartComponent,
        ValidateIccSymptonsComponent,
        ValidateIccFinalComponent,
        ImageCarousselComponent
    ],
    imports: [
        FormsModule, ReactiveFormsModule,
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {
                path: 'validate',
                component: ValidateIccComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'start',
                        component: ValidateIccStartComponent
                    },
                    {
                        path: 'symptons',
                        component: ValidateIccSymptonsComponent
                    },
                    {
                        path: 'confirm',
                        component: ValidateIccConfirmComponent
                    },

                ]
            },
            {
                path: 'validate_final',
                component: ValidateIccFinalComponent
            },
            {path: 'icc/report', component: IccReportComponent, pathMatch: 'full', canActivate: [AuthGuard]},
            {path: 'icc/generate', component: IccGenerateComponent, pathMatch: 'full', canActivate: [AuthGuard]}
        ])
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "nl"},
        {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
