import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {}
