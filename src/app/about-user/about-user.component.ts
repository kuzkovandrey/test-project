import {Component, OnInit} from "@angular/core";
import {UserService} from "../core/services/user.service";
import {User} from "../core/models/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../core/services/jwt.service";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit{

  username = ''
  firstName = ''
  lastName = ''
  errorMessage = ''

  constructor(private userService: UserService, private router: Router, private jwt: JwtService) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      (user: User) => {
        this.username = user.username
        this.firstName = <string>user.firstName
        this.lastName = <string>user.lastName
      },

      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.errorMessage = error.error.message
          console.log(this.errorMessage)
        }
      }
    )

    this.jwt.isDestroyedAccessToken.subscribe(() => {
      this.router.navigate(['auth', 'login'])
    })

  }

  goToLogin() {
    this.router.navigate(['auth', 'login'])
  }
}
