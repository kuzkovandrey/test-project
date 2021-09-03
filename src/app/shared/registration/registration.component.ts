import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, DoCheck{

  registrationForm!: FormGroup

  isInvalidUsername = false
  isInvalidPassword = false
  isInvalidFirstName = false
  isInvalidLastName = false

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
    const isTouchedUsername = this.registrationForm?.get('username')?.touched
    const isInvalidUsername = this.registrationForm?.get('username')?.invalid
    this.isInvalidUsername = !!( isTouchedUsername && isInvalidUsername );

    const isTouchedPassword = this.registrationForm?.get('password')?.touched
    const isInvalidPassword = this.registrationForm?.get('password')?.invalid
    this.isInvalidPassword = !!( isTouchedPassword && isInvalidPassword);

    const isTouchedFirstName = this.registrationForm?.get('firstName')?.touched
    const isInvalidFirstName  = this.registrationForm?.get('firstName')?.invalid
    this.isInvalidFirstName = !!( isTouchedFirstName && isInvalidFirstName);

    const isTouchedLastName = this.registrationForm?.get('lastName')?.touched
    const isInvalidLastName  = this.registrationForm?.get('lastName')?.invalid
    this.isInvalidLastName = !!( isTouchedLastName && isInvalidLastName);
  }

  registration() {
    console.log('reg')
  }

}

