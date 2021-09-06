import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthPageComponent} from "./auth-page.component";
import {RegistrationComponent} from "../shared/registration/registration.component";
import {LoginComponent} from "../shared/login/login.component";

const routes: Routes = [
  {path: '', component: AuthPageComponent, children: [
      {
        path: 'registration', component: RegistrationComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', redirectTo: 'registration'
      },
      {
        path: '**', redirectTo: 'registration'
      }
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
