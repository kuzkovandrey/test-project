import {Component, OnInit} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

import {UserService} from "../core/services/user.service";
import {User} from "../core/models/user.model";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit{

  username = ''
  firstName = ''
  lastName = ''
  errorMessage = ''

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      ({username, firstName, lastName}: User) => {
        this.username = username

        this.firstName = <string>firstName

        this.lastName = <string>lastName
      },

      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.errorMessage = error.error.message

          console.log(this.errorMessage)
        } else {
          this.errorMessage = `${error.status}`

          console.log(this.errorMessage, error.status)
        }
      }
    )
  }

  goToLogin() {
    this.router.navigate(['auth', 'login'])
  }
}
