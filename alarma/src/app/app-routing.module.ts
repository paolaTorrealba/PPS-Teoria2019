import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'error', loadChildren: './componentes/error/error.module#ErrorPageModule' },
  { path: 'usuario', loadChildren: './componentes/usuario/usuario.module#UsuarioPageModule' },
  { path: 'apagar', loadChildren: './componentes/apagar/apagar.module#ApagarPageModule' },
  { path: 'splash', loadChildren: './componentes/splash/splash.module#SplashPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) { }
 }
