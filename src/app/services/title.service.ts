import {Injectable} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class TitleService {

    private titleService: Title;
    private subTitle: string;
    constructor(private service: Title) {
        this.titleService = service;
        this.titleService.setTitle(environment.appName + " Digitaal Contactonderzoek.");
    }

    public setTitle(title: string) {
        this.subTitle = title;
        this.titleService.setTitle(title + " – " + environment.appName + " Digitaal Contactonderzoek.")
    }
    public getAppTitle(){
        return environment.appName;
    }
}
