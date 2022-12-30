import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { EditAngularComponent } from './componentes/edit-angular/edit-angular.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FinComponent } from './componentes/fin/fin.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { IndexComponent } from './componentes/index/index.component';
import { ModalImgPerfilComponent } from './componentes/modal-img-perfil/modal-img-perfil.component';
import { ModalInfoComponent } from './componentes/modal-info/modal-info.component';
import { ModalLoginComponent } from './componentes/modal-login/modal-login.component';
import { ModalNombreComponent } from './componentes/modal-nombre/modal-nombre.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SoftsSkillsComponent } from './componentes/softs-skills/softs-skills.component';


const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'barra-de-navegacion', component: NavBarComponent },
  {path: 'banner', component: BannerComponent },
  {path: 'sobre-mi', component: SobreMiComponent },
  {path: 'editar', component: EditAngularComponent },
  {path: 'educacion', component: EducacionComponent },
  {path: 'hard-skills', component: HardSkillsComponent },
  {path: 'softs-skills', component: SoftsSkillsComponent },
  {path: 'proyectos', component: ProyectosComponent },
  {path: 'editar-login', component: ModalLoginComponent },
  {path: 'editar-foto-perfil', component: ModalImgPerfilComponent },
  {path: 'editar-nombre', component: ModalNombreComponent },
  {path: 'editar-info', component: ModalInfoComponent },
  {path: 'fin', component: FinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
