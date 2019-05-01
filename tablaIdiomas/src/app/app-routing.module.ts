import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { NumeroComponent } from './componentes/numero/numero.component';
import { AnimalComponent } from './componentes/animal/animal.component';


const routes: Routes = [  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home/juego', component: JuegoComponent },
    { path: 'home/numero', component: NumeroComponent },
    { path: 'home/animal', component: AnimalComponent}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
