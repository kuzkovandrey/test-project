import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

import {User} from "../../core/models/user.model";
import {AuthService} from "../../core/services/auth.service";
import {isInvalidInput} from "../../core/functions/is-invalid-input";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, DoCheck{

  @ViewChild('submitButton') submitButton!: ElementRef

  registrationForm!: FormGroup

  isInvalidUsername = false
  isInvalidPassword = false
  isInvalidFirstName = false
  isInvalidLastName = false

  errorMessage = ''

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),

      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),

      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    })
  }

  ngDoCheck(): void {
    this.isInvalidUsername = isInvalidInput(this.registrationForm, 'username')

    this.isInvalidPassword = isInvalidInput(this.registrationForm, 'password')

    this.isInvalidFirstName = isInvalidInput(this.registrationForm, 'firstName')

    this.isInvalidLastName = isInvalidInput(this.registrationForm, 'lastName')
  }

  submit() {
    this.registration(this.registrationForm.value)
  }

  registration(user: User) {
    this.auth.register(user).subscribe(
      () => {
        console.log('access')
        this.router.navigate(['auth', 'login', {access: true}])
      },
      (error: HttpErrorResponse) => {
        console.log('reg error: registrationComponent', error)

        this.errorMessage = error.error.message

        if (error.status === 500 || error.status === 0) this.errorMessage = `Disconnected internet.. Error status ${error.status}`

        setTimeout(() => this.errorMessage = '',3000)
      }
    )
  }
}

