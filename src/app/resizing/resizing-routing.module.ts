import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ResizingComponent} from "./resizing.component";

const routes: Routes = [
  {path: '', component: ResizingComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResizingRoutingModule {

}
