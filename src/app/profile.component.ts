import { Component, OnInit } from '@angular/core';
import { PersonalInformationService } from './services/personal-information.service';

@Component({
  selector: 'app-profile',
  template: `
    <h2>{{ profileName }}'s Instagram Images</h2>
    <div *ngFor="let imageUrl of imageList">
      <img [src]="imageUrl" alt="Instagram Image">
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  profileName = 'example_profile';
  imageList: string[] = [];

  constructor(private instagramService: PersonalInformationService) {}

  ngOnInit(): void {
    this.imageList = this.instagramService.generateImageList(this.profileName);
  }
}
