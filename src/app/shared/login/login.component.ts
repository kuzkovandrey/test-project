import {Component, DoCheck, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

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
  }

  ngDoCheck(): void {
    const isTouchedUsername = this.loginForm?.get('username')?.touched
    const isInvalidUsername = this.loginForm?.get('username')?.invalid
    this.isInvalidUsername = !!( isTouchedUsername && isInvalidUsername );

    const isTouchedPassword = this.loginForm?.get('password')?.touched
    const isInvalidPassword = this.loginForm?.get('password')?.invalid
    this.isInvalidPassword = !!( isTouchedPassword && isInvalidPassword);
  }

  login() {
    console.log('login')
  }
}

