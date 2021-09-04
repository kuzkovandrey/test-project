import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AboutUserComponent} from "./about-user.component";
import {AboutUserRoutingModule} from "./about-user-routing.module";

@NgModule({
  declarations: [
    AboutUserComponent
  ],
  imports: [
    CommonModule,
    AboutUserRoutingModule
  ]
})
export class AboutUserModule {}
