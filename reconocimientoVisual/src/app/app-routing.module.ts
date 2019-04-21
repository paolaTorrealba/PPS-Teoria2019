import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes , Router} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'error', loadChildren: './componentes/error/error.module#ErrorPageModule' }, 
  { path: 'primera', loadChildren: './componentes/primera/primera.module#PrimeraPageModule' },
  { path: 'segunda', loadChildren: './componentes/segunda/segunda.module#SegundaPageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },

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
