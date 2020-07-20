import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ValidateIccComponent} from './validate-icc/validate-icc.component';
import {ValidateStep1Component} from './validate-icc/validate-step1/validate-step1.component';
import {StepComponent} from './components/step/step.component';
import {ValidateStep2Component} from './validate-icc/validate-step2/validate-step2.component';
import {ExpansionPanelComponent} from './components/expansion-panel/expansion-panel.component';
import {ValidateStep4Component} from './validate-icc/validate-step4/validate-step4.component';

import {registerLocaleData} from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import {ValidateStep5Component} from './validate-icc/validate-step5/validate-step5.component';
import {ValidateIccConfirmComponent} from './validate-icc/validate-icc-confirm/validate-icc-confirm.component';
import {ValidateIccStartComponent} from './validate-icc/validate-icc-start/validate-icc-start.component';

import {ValidateIccFinalComponent} from './validate-icc/validate-icc-final/validate-icc-final.component';
import {AuthGuard, ErrorInterceptor} from './helpers';
import {ImageCarousselComponent} from './components/image-caroussel/image-caroussel.component';
import {AuthComponent} from './auth/auth.component';

import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService, IAppConfig } from './services/app-config.service';

registerLocaleData(localeNL);

const appInitializer = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ValidateIccComponent,
        ValidateStep1Component,
        StepComponent,
        ExpansionPanelComponent,
        ValidateStep2Component,
        ValidateStep4Component,
        ValidateStep5Component,
        ValidateIccConfirmComponent,
        ValidateIccStartComponent,
        ValidateIccFinalComponent,
        ImageCarousselComponent
    ],
    imports: [
        FormsModule, ReactiveFormsModule,
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'auth', component: AuthComponent},
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
                        path: 'confirm',
                        component: ValidateIccConfirmComponent
                    },
                ]
            },
            {
                path: 'validate_final',
                component: ValidateIccFinalComponent
            }
        ])
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'nl'},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        AppConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AppConfigService]
          }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
// {path: 'icc/generate', component: IccGenerateComponent, pathMatch: 'full', canActivate: [AuthGuard]}
