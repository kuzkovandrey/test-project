import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ResizingPageComponent} from "./resizing-page.component";

const routes: Routes = [
  {path: '', component: ResizingPageComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResizingPageRoutingModule {
}
