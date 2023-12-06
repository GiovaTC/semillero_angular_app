import { Component, OnInit } from '@angular/core';
import { PersonalInformationService } from './services/personal-information.service';


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

@Component({
  selector: 'app-profile',
  template: `
    <h2>Imagenes</h2>
    <table class="table">
      <tbody>
        <tr *ngFor="let row of imageRows">
          <td *ngFor="let imageUrl of row">
            <img [src]="imageUrl" alt="Instagram Image" class="img-fluid mb-3">
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    /* Puedes agregar estilos personalizados aquí si es necesario */
  `]
})
export class ProfileComponent implements OnInit {
  profileName = 'example_profile';
  imageList: string[] = [];
  imageRows: string[][] = [];

  constructor(private instagramService: PersonalInformationService) {}

  ngOnInit(): void {
    this.imageList = this.instagramService.generateImageList(this.profileName);
    this.imageRows = this.chunkArray(this.imageList, 5); 
  }

  chunkArray(array: any[], size: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
}







