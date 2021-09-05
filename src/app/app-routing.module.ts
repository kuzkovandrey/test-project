import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NotAuthGuard} from "./core/guards/not-auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [],
    loadChildren: () => import('./auth-page/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: 'about',
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path: 'resizing',
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./resizing-page/resizing-page.module').then(m => m.ResizingPageModule)
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
