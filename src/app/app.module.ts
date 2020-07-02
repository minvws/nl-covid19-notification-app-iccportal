import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValidateIccComponent,
    IccReportComponent,
    IccGenerateComponent,
    ValidateStep1Component,
    StepComponent,
    ValidateStep2Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'validate', component: ValidateIccComponent, pathMatch: 'full' },
      { path: 'icc/report', component: IccReportComponent, pathMatch: 'full' },
      { path: 'icc/generate', component: IccGenerateComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
