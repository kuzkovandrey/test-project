import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./auth.component";
import {RegistrationComponent} from "../shared/registration/registration.component";
import {LoginComponent} from "../shared/login/login.component";

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {
        path: 'registration', component: RegistrationComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', redirectTo: 'registration'
      }
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
