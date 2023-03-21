import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftsSkillsComponent } from './componentes/softs-skills/softs-skills.component';
import { ModalesComponent } from './componentes/modales/modales.component';
import { ModalLoginComponent } from './componentes/modales/modal-login/modal-login.component';
import { ModalLogoutComponent } from './componentes/modales/modal-logout/modal-logout.component';
import { ModalBannerComponent } from './componentes/modales/modal-banner/modal-banner.component';
import { ModalPerfilComponent } from './componentes/modales/modal-perfil/modal-perfil.component';
import { ModalEducacionComponent } from './componentes/modales/modal-educacion/modal-educacion.component';
import { ModalSoftSkillsComponent } from './componentes/modales/modal-soft-skills/modal-soft-skills.component';
import { ModalHardSkillsComponent } from './componentes/modales/modal-hard-skills/modal-hard-skills.component';
import { ModalProyectosComponent } from './componentes/modales/modal-proyectos/modal-proyectos.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { ModalSobreMiComponent } from './componentes/modales/modal-sobre-mi/modal-sobre-mi.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Skills2Component } from './componentes/skills2/skills2.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { NuevoUsuarioComponent } from './model/nuevo-usuario/nuevo-usuario.component';
import { LoginUsuarioComponent } from './model/login-usuario/login-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerComponent,
    SobreMiComponent,
    HardSkillsComponent,
    SoftsSkillsComponent,
    ModalesComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    ModalBannerComponent,
    ModalPerfilComponent,
    ModalEducacionComponent,
    ModalSoftSkillsComponent,
    ModalHardSkillsComponent,
    ModalProyectosComponent,
    Pagina404Component,
    LogoutComponent,
    ModalSobreMiComponent,
    HeaderComponent,
    NavBarComponent,
    Skills2Component,
    FooterComponent,
    HomeComponent,
    NuevoUsuarioComponent,
    LoginUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
