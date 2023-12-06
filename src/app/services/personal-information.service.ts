import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

  generateImageList(profileName: string): string[] {
    // Simulando la generación de una lista de imágenes
    const imageList: string[] = [];

    for (let i = 1; i <= 10; i++) {
      const imageUrl = `https://picsum.photos/200/300?random=${i}`;
      imageList.push(imageUrl);
    }

    return imageList;
  }

  personalInformation: any = {

    username : "",
    infoaccount : {
      publicaciones: 0,
      seguidores: 0,
      seguidos: 0,
    },
    highlights: [],
    posts: [],
    threads: {
      username: "",
      privado: false,
    }

  }

  constructor(private networkService: NetworkService) {
 //   this.setPersonalInformation(this.networkService.obtainData());
  }

  getPersonalInformation(): PersonalInformationService {
    return this.personalInformation
  }

  setPersonalInformation(information: any): void {
    console.log("información servicio", information);

    // Asignar la información proporcionada al objeto personalInformation
    this.personalInformation = {
      username: information.username || "",
      infoaccount: {
        publicaciones: information.infoaccount?.publicaciones || 0,
        seguidores: information.infoaccount?.seguidores || 0,
        seguidos: information.infoaccount?.seguidos || 0,
      },
      highlights: information.highlights || [],
      posts: information.posts || [],
      threads: {
        username: information.threads?.username || "",
        privado: information.threads?.privado || false,
      }
    };
  }
}
