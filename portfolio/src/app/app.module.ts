import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
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
import { ModalSobreMiComponent } from './componentes/modales/modal-sobre-mi/modal-sobre-mi.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { Skills2Component } from './componentes/skills2/skills2.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

//Conectar back con el front
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerComponent,
    SobreMiComponent,
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
    ModalSobreMiComponent,
    HeaderComponent,
    NavBarComponent,
    Skills2Component,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
