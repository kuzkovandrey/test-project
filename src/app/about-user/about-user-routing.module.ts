import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutUserComponent} from "./about-user.component";

const routes: Routes = [
  {path: '', component: AboutUserComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUserRoutingModule {}
