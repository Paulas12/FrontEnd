import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AppRoutingModule } from '../app-routing.module';
import { IndexComponent } from './componentes/index/index.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { BarraDeNavegacionComponent } from './componentes/barra-de-navegacion/barra-de-navegacion.component';
import { ModalImgDePerfilComponent } from './componentes/modal-img-de-perfil/modal-img-de-perfil.component';
import { ModalLoginComponent } from './componentes/login/modal-login.component';
import { ParaEditarloEnAngularComponent } from './componentes/para-editarlo-en-angular/para-editarlo-en-angular.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { ButtonTrigerComponent } from './componentes/barra-de-navegacion/button-triger/button-triger.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    IndexComponent,
    EducacionComponent,
    HardSkillsComponent,
    BarraDeNavegacionComponent,
    ModalImgDePerfilComponent,
    ModalLoginComponent,
    ParaEditarloEnAngularComponent,
    ProyectosComponent,
    SobreMiComponent,
    SoftSkillsComponent,
    ButtonTrigerComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
