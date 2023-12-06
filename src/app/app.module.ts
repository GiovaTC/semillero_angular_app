import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ProfileComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './logo/logo.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { ReelsComponent } from './reels/reels.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CrearComponent } from './crear/crear.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PrincipalComponent } from './principal/principal.component';
import { PersonalInformationService } from './services/personal-information.service';
import { NetworkService } from './services/network.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InicioComponent,
    BuscarComponent,
    ExplorarComponent,
    ReelsComponent,
    MensajesComponent,
    NotificacionesComponent,
    CrearComponent,
    PerfilComponent,
    PrincipalComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonalInformationService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }


