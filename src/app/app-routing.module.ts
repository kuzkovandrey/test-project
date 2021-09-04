import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about-user',
    canActivate: [AuthGuard],
    loadChildren: () => import('./about-user/about-user.module').then(m => m.AboutUserModule)
  },
  {
    path: 'resizing',
    canActivate: [AuthGuard],
    loadChildren: () => import('./resizing/resizing.module').then(m => m.ResizingModule)
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
