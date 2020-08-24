import {enableProdMode, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService, IAppConfig} from "./app-config.service";
import {IAppConfigService} from "./i-app-config.service";

@Injectable()
export class AppConfigTestService extends AppConfigService{

    async loadAppConfig() {
        this.appConfig = <IAppConfig>{
            appName: "CoronaMelder TestSuite",
            apiUrl: "http://coronamelder.test",
            authHost: "coronamelder.test"
        };
    }
}

