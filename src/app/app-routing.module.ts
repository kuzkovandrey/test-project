import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NotAuthGuard} from "./core/guards/not-auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about-user',
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./about-user/about-user.module').then(m => m.AboutUserModule)
  },
  {
    path: 'resizing',
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./resizing/resizing.module').then(m => m.ResizingModule)
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
