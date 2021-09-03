import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule {}
