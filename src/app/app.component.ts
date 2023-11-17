import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
} from 'ionicons/icons';
// if I were using the modalController, I would import from ion-modal
import { defineCustomElement } from '@ionic/core/components/ion-modal.js';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  constructor() {
    // pour faire fonctionner la modal
    // https://github.com/ionic-team/ionic-framework/issues/28385

    defineCustomElement();
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
    });
  }
}
