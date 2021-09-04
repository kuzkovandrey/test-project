import {Component, DoCheck, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../core/models/user.model";
import {AuthService} from "../../core/services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {JwtService} from "../../core/services/jwt.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../registration/registration.component.scss'
  ]
})
export class LoginComponent implements OnInit, DoCheck{

  loginForm!: FormGroup
  isInvalidUsername = false
  isInvalidPassword = false

  errorMessage = ''

  isAllowedAccess = false
  isUnAuthorized = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService,
              private jwt: JwtService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this.isAllowedAccess = this.route.snapshot.params?.access

    this.isUnAuthorized = !!(this.route.snapshot.queryParams.unAuth)

    if(this.isAllowedAccess) {
      setTimeout(() => {
        this.isAllowedAccess = false
      }, 3000)
    }

  }

  ngDoCheck(): void {
    const isTouchedUsername = this.loginForm?.get('username')?.touched
    const isInvalidUsername = this.loginForm?.get('username')?.invalid
    this.isInvalidUsername = !!( isTouchedUsername && isInvalidUsername )

    const isTouchedPassword = this.loginForm?.get('password')?.touched
    const isInvalidPassword = this.loginForm?.get('password')?.invalid
    this.isInvalidPassword = !!( isTouchedPassword && isInvalidPassword)
  }

  submit() {
    this.login(this.loginForm.value)
  }

  login(user: User) {

    this.jwt.refreshToken()

    //перенести логику this.auth.authorized = true в auth service
    this.auth.login(user).pipe(delay(100)).subscribe(
      user => {
        console.log(user)
        this.auth.authorized = true
        this.router.navigate(['about-user'])
      },

      (error: HttpErrorResponse)=> {
        console.log('Login error', error.error.message)

        this.errorMessage = error.error.message

        setTimeout(() => this.errorMessage = '',3000)
      }
    )
  }
}

