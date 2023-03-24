import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [
  { path: '', component: HomeComponent },     //ruta principal, cuando sea localHost:4200 va al inicio
  { path: 'login', component: LoginComponent },     //cuando sea localHost:4200/login irá al login
  { path: '**', component: Pagina404Component },     // cuando haya un error irá a la pagina de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
