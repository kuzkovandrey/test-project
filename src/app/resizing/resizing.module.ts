import {NgModule} from "@angular/core";

import {ResizingComponent} from "./resizing.component";
import {ResizingRoutingModule} from "./resizing-routing.module";
import {ResizeBoxComponent} from "./resize-box/resize-box.component";

@NgModule({
  declarations: [
    ResizingComponent,
    ResizeBoxComponent
  ],
  imports: [
    ResizingRoutingModule
  ]
})
export class ResizingModule {

}
