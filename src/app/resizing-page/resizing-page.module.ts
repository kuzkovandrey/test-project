import {NgModule} from "@angular/core";

import {ResizingPageComponent} from "./resizing-page.component";
import {ResizingPageRoutingModule} from "./resizing-page-routing.module";
import {ResizeBoxComponent} from "./resize-box/resize-box.component";

@NgModule({
  declarations: [
    ResizingPageComponent,
    ResizeBoxComponent
  ],
  imports: [
    ResizingPageRoutingModule
  ]
})
export class ResizingPageModule {

}
