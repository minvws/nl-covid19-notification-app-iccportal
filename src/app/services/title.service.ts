import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { IAppConfig, AppConfigService } from './app-config.service';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private config: IAppConfig;
    private titleService: Title;
    private subTitle: string;

    constructor(private service: Title, appConfigService: AppConfigService) {
        this.titleService = service;
        this.titleService.setTitle(this.config.appName + ' Digitaal Contactonderzoek.');
        this.config = appConfigService.getConfig();
    }

    public setTitle(title: string) {
        this.subTitle = title;
        this.titleService.setTitle(title + ' – ' + this.config.appName + ' Digitaal Contactonderzoek.');
    }

    public getAppTitle() {
        return this.config.appName;
    }
}
