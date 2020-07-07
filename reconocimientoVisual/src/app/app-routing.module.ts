import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes , Router} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'}, 
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'error', loadChildren: './componentes/error/error.module#ErrorPageModule' }, 
  { path: 'primera', loadChildren: './componentes/primera/primera.module#PrimeraPageModule' },
  { path: 'segunda', loadChildren: './componentes/segunda/segunda.module#SegundaPageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'foto-linda', loadChildren: './pages/foto-linda/foto-linda.module#FotoLindaPageModule' },
  { path: 'foto-fea', loadChildren: './pages/foto-fea/foto-fea.module#FotoFeaPageModule' },
  { path: 'grafico-lindas', loadChildren: './pages/grafico-lindas/grafico-lindas.module#GraficoLindasPageModule' },
  { path: 'grafico-feas', loadChildren: './pages/grafico-feas/grafico-feas.module#GraficoFeasPageModule' },
  { path: 'galeria-lindas', loadChildren: './pages/galeria-lindas/galeria-lindas.module#GaleriaLindasPageModule' },
  { path: 'galeria-feas', loadChildren: './pages/galeria-feas/galeria-feas.module#GaleriaFeasPageModule' },
  { path: 'lista-lindas', loadChildren: './pages/lista-lindas/lista-lindas.module#ListaLindasPageModule' },
  { path: 'lista-feas', loadChildren: './pages/lista-feas/lista-feas.module#ListaFeasPageModule' },

  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },


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
