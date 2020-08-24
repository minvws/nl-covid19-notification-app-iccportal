import {enableProdMode, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppConfig} from "./app-config.service";

@Injectable()
export class AppConfigTestService {
    private appConfig: IAppConfig;

    constructor(private http: HttpClient) {
    }

    async loadAppConfig() {
        this.appConfig = <IAppConfig>{
            appName: "CoronaMelder TestSuite",
            apiUrl: "string",
            authHost: "string"
        };
    }

    getConfig(): IAppConfig {
        return this.appConfig;
    }
}
