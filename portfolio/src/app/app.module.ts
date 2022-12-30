import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftsSkillsComponent } from './componentes/softs-skills/softs-skills.component';
import { ModalLoginComponent } from './componentes/modal-login/modal-login.component';
import { ModalImgPerfilComponent } from './componentes/modal-img-perfil/modal-img-perfil.component';
import { ModalNombreComponent } from './componentes/modal-nombre/modal-nombre.component';
import { ModalInfoComponent } from './componentes/modal-info/modal-info.component';
import { FinComponent } from './componentes/fin/fin.component';
import { EditAngularComponent } from './componentes/edit-angular/edit-angular.component';
import { IndexComponent } from './componentes/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerComponent,
    NavBarComponent,
    SobreMiComponent,
    HardSkillsComponent,
    SoftsSkillsComponent,
    ModalLoginComponent,
    ModalImgPerfilComponent,
    ModalNombreComponent,
    ModalInfoComponent,
    FinComponent,
    EditAngularComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
