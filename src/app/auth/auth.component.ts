import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import {AuthenticationService} from "../services";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authentication: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['token']) {
        this.authentication.login(params['token'])
        this.router.navigate(["validate/start"]);
      }
    });
  }

}
