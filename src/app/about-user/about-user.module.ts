import {NgModule} from "@angular/core";
import {AboutUserComponent} from "./about-user.component";
import {AboutUserRoutingModule} from "./about-user-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AboutUserComponent
  ],
  imports: [
    CommonModule,
    AboutUserRoutingModule
  ]
})
export class AboutUserModule {

}
