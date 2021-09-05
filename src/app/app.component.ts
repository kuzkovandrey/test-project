import {AfterViewChecked, AfterViewInit, Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "./core/services/auth.service";
import {JwtService} from "./core/services/jwt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{

  constructor(private auth: AuthService,
              private jwt: JwtService,
              private router: Router) {}

  ngAfterViewInit() {
    /*const token = this.jwt.getToken('jwtAccessToken')
    if (token) this.auth.authorized = true;*/
  }

  ngAfterViewChecked() {
    //if(this.auth.authorized) {
      const token = this.jwt.getToken('jwtAccessToken')

      console.log('ngAfterViewChecked appComponent')

      if (!token && this.auth.authorized) {
        this.auth.authorized = false
        this.router.navigate(['auth', 'login'], {queryParams: {unAuth: true}})
      }
    //}
  }
}
