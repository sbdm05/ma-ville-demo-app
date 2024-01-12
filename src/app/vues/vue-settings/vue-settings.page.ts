import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderPage } from 'src/app/components/header/header.page';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { IconPage } from 'src/app/components/icons/icon/icon.page';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vue-settings',
  templateUrl: './vue-settings.page.html',
  styleUrls: ['./vue-settings.page.scss'],
  standalone: true,
  imports: [
    HeaderPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonLabel,
    IonList,
    IonItem,
    IonThumbnail,
    IconPage,
    CommonModule,
    FormsModule,
    RouterLink
  ],
})
export class VueSettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
