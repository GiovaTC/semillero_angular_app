import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { ReelsComponent } from './reels/reels.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CrearComponent } from './crear/crear.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
//{ path: '', component: PrincipalComponent },
  { path: '', component: InicioComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'explorar', component: ExplorarComponent },
  { path: 'reels', component: ReelsComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'crear', component: CrearComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
