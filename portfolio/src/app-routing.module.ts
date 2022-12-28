import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BannerComponent } from './app/componentes/banner/banner.component';
import { BarraDeNavegacionComponent } from './app/componentes/barra-de-navegacion/barra-de-navegacion.component';
import { EducacionComponent } from './app/componentes/educacion/educacion.component';
import { HardSkillsComponent } from './app/componentes/hard-skills/hard-skills.component';
import { IndexComponent } from './app/componentes/index/index.component';
import { ModalImgDePerfilComponent } from './app/componentes/modal-img-de-perfil/modal-img-de-perfil.component';
import { ModalLoginComponent } from './app/componentes/login/modal-login.component';
import { ParaEditarloEnAngularComponent } from './app/componentes/para-editarlo-en-angular/para-editarlo-en-angular.component';
import { PropertyWrite } from '@angular/compiler';
import { ProyectosComponent } from './app/componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './app/componentes/sobre-mi/sobre-mi.component';
import { SoftSkillsComponent } from './app/componentes/soft-skills/soft-skills.component';

const routes: Router = [
  {path: '', component: IndexComponent },
  {path: 'banner', component: BannerComponent },
  {path: 'barra de navegacion', component: BarraDeNavegacionComponent }, 
  {path: 'educacion', component: EducacionComponent },
  {path: 'hard skills', component: HardSkillsComponent },
  {path: 'modal img de perfil', component:ModalImgDePerfilComponent },
  {path: 'modal login', component: ModalLoginComponent },
  {path: 'para editarlo en angular', component: ParaEditarloEnAngularComponent },
  {path: 'proyectos', component: ProyectosComponent },
  {path: 'sobre mi', component: SobreMiComponent},
  {path: 'soft skills', component: SoftSkillsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
