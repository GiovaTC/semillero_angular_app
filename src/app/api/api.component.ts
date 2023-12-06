import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  template: `
    <div *ngIf="post">
      <h1>Ejemplo llamado a Api para: Publicaciones</h1>
      <p>{{ post.title }}</p>
    </div>
    <div *ngIf="error">
      <p>Error: {{ error }}</p>
    </div>
  `,
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  post: any; 
  error: string | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerTextosPublicaciones().subscribe(
      (data) => {
        this.post = data; // 'data' es el objeto JSON devuelto por la API
      },
      (error) => {
        this.error = 'Hubo un error al obtener los textos de publicación.';
        console.error('Error:', error);
      }
    );
  }
}
