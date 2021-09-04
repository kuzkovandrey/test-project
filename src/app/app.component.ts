import {AfterViewChecked, Component} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {JwtService} from "./core/services/jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{

  constructor(private auth: AuthService,
              private jwt: JwtService,
              private router: Router) {}

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
