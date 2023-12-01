import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  Platform,
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
import OneSignal, { OneSignalPlugin } from 'onesignal-cordova-plugin';

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
export class AppComponent implements OnInit {
  statusBar: any;
  splashScreen: any;
  constructor(private platform: Platform) {
    // pour faire fonctionner la modal
    // https://github.com/ionic-team/ionic-framework/issues/28385
    this.initializeApp();
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

  initializeApp() {
    this.platform.ready().then(() => {
      OneSignal.Debug.setLogLevel(6);
      this.OneSignalInit();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.buffer();
    });
    //this.OneSignalInit();
  }

  OneSignalInit() {
    OneSignal.initialize('63767350-84be-4d5b-b23e-1b77c8aa5c71');

    let myClickListener = async function (event: any) {
      let notificationData = JSON.stringify(event);
    };
    OneSignal.Notifications.addEventListener('click', myClickListener);

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.Notifications.requestPermission(true).then(
      (accepted: boolean) => {
        console.log('User accepted notifications: ' + accepted);
      }
    );
  }
  // buffer() {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit() {
    // OneSignal.initialize('63767350-84be-4d5b-b23e-1b77c8aa5c71');
    // let myClickListener = async function (event: any) {
    //   let notificationData = JSON.stringify(event);
    // };
    // OneSignal.Notifications.addEventListener('click', myClickListener);
    // // Prompts the user for notification permissions.
    // //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    // OneSignal.Notifications.requestPermission(true).then(
    //   (accepted: boolean) => {
    //     console.log('User accepted notifications: ' + accepted);
    //   }
    // );
  }
}
