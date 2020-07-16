import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
// import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { NumeroComponent } from './componentes/numero/numero.component';
import { AnimalComponent } from './componentes/animal/animal.component';


const routes: Routes = [  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'}, 
       // { path: 'login', component: LoginComponent },
    // { path: 'color', component: JuegoComponent },
    // { path: 'numero', component: NumeroComponent },
    // { path: 'animal', component: AnimalComponent},
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'numero', loadChildren: './pages/numero/numero.module#NumeroPageModule' },
  { path: 'color', loadChildren: './pages/color/color.module#ColorPageModule' },
  { path: 'animal', loadChildren: './pages/animal/animal.module#AnimalPageModule' }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
