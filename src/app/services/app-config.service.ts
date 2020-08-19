import {enableProdMode, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppConfigService {
    private appConfig: IAppConfig;

    constructor(private http: HttpClient) {
    }

    async loadAppConfig() {
        console.log('loading settings');
        const data = await this.http.get('/assets/data/appConfig.json').toPromise();
        this.appConfig = <IAppConfig>data;
        console.log('settings loaded');
    }

    getConfig(): IAppConfig {
        return this.appConfig;
    }
}

export interface IAppConfig {
    production: boolean;
    appName: string;
    apiUrl: string;
    authHost: string;
}
