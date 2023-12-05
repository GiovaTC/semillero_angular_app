import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-instagram';
  menuItems = [
    { label: ' Inicio', link: '/', iconClass: 'fas fa-home' },
    { label: ' Buscar', link: '/buscar', iconClass: 'fas fa-search' },
    { label: ' Explorar', link: '/explorar', iconClass: 'fas fa-compass' },
    { label: ' Reels', link: '/reels', iconClass: 'fas fa-video' },
    { label: ' Mensajes', link: '/mensajes', iconClass: 'fas fa-envelope' },
    { label: ' Notificaciones', link: '/notificaciones', iconClass: 'fas fa-bell' },
    { label: ' Crear', link: '/crear', iconClass: 'fas fa-plus-square' },
    { label: ' Perfil', link: '/perfil', iconClass: 'fas fa-user' }
  ];
}




