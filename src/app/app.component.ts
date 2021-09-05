import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "./core/services/auth.service";
import {JwtService} from "./core/services/jwt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked{

  constructor(private auth: AuthService,
              private jwt: JwtService,
              private router: Router) {}

  ngAfterViewInit() {
    /*const token = this.jwt.getToken('jwtAccessToken')
    if (token) this.auth.authorized = true;*/
  }

  ngAfterViewChecked() {
    if(this.auth.authorized) {
      const token = this.jwt.getToken('jwtAccessToken')

      if (!token) {
        this.auth.authorized = false
        this.router.navigate(['auth', 'login'], {queryParams: {unAuth: true}})
      }
    }
  }
}
