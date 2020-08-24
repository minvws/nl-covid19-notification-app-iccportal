import {enableProdMode, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppConfigService} from './i-app-config.service';

@Injectable()
export class AppConfigService implements IAppConfigService {
    protected appConfig: IAppConfig;

    constructor(private http: HttpClient) {
    }

    async loadAppConfig() {
        const data = await this.http.get('/assets/data/appConfig.json').toPromise();
        this.appConfig = <IAppConfig>data;
    }

    getConfig(): IAppConfig {
        return this.appConfig;
    }
}

export interface IAppConfig {
    appName: string;
    apiUrl: string;
    authHost: string;
}
