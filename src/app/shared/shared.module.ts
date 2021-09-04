import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HeaderComponent
  ]
})
export class SharedModule {}
