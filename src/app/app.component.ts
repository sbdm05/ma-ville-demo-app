import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

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
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonHeader,
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
  arrowBack,
  arrowBackOutline,
  chevronBackOutline,
  listOutline,
  globeOutline,
  callOutline,
  recordingOutline,
  addCircleOutline,
  bookmarksOutline,
  homeOutline,
  bookmarks,
  locationOutline,
  calendarOutline,
  settingsOutline,
  bulbOutline,
  musicalNotesOutline,
  notificationsOutline,
  searchOutline,
  helpOutline
} from 'ionicons/icons';
// if I were using the modalController, I would import from ion-modal
import { defineCustomElement } from '@ionic/core/components/ion-modal.js';
import OneSignal, { OneSignalPlugin } from 'onesignal-cordova-plugin';
import { MenuBottomFixedPage } from './components/menu-bottom-fixed/menu-bottom-fixed.page';
import { OneSignalService } from './service/one-signal/one-signal.service';
import { StorageCategoriesPreferenceService } from './service/storage-categories-preference/storage-categories-preference.service';

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
    IonHeader,
    MenuBottomFixedPage,
  ],
})
export class AppComponent {
  statusBar: any;
  splashScreen: any;
  public bottomNavVisible: boolean = false;
  currentUrl!: string;
  constructor(
    private platform: Platform,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private statusStorage : StorageCategoriesPreferenceService
  ) {
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
      arrowBackOutline,
      chevronBackOutline,
      listOutline,
      globeOutline,
      callOutline,
      recordingOutline,
      addCircleOutline,
      bookmarksOutline,
      bookmarks,
      homeOutline,
      locationOutline,
      calendarOutline,
      settingsOutline,
      bulbOutline,
      musicalNotesOutline,
      notificationsOutline,
      searchOutline,
      helpOutline
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //OneSignal.Debug.setLogLevel(6);
      this.OneSignalInit();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.buffer();
    });
    //this.OneSignalInit();
  }

  OneSignalInit() {
    OneSignal.initialize('63767350-84be-4d5b-b23e-1b77c8aa5c71');
    const self = this; // Preserve reference to 'this'

    let myClickListener = async function (event: any) {
      console.log(event, 'event ligne 105');
      const url = event.result.url;
      console.log(url, 'after saved');

      if (url) {
        const schemeSeparatorIndex = event.result.url.indexOf('://');
        if (schemeSeparatorIndex !== -1) {
          const schemeRemoved = url.substring(schemeSeparatorIndex + 2); // Remove the scheme and '://'
          const pathStartIndex = schemeRemoved.indexOf('/');
          if (pathStartIndex !== -1) {
            console.log(schemeRemoved.substring(pathStartIndex + 1));
            const urlToFollow = schemeRemoved.substring(pathStartIndex + 1);
            // this is not working
            // i want to use the key work this here
            self.router.navigate(['actus']);
          }
        }
      } else {
        //const create_adress_url =
        self.router.navigate(['chantiers']);
      }

      return null;

      // let notificationData = JSON.stringify(event);
      // console.log(notificationData, 'event ligne 108');
    };

    OneSignal.Notifications.addEventListener('click', myClickListener);

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.Notifications.requestPermission(true).then(
      (accepted: boolean) => {
        console.log('User accepted notifications: ' + accepted);
        // this.oneSignalService.notifStatus$.next(accepted)
        // on stocke l'info dans le localStorage
        this.statusStorage.setData('notif-status', accepted);
      }
    );

    this.disablePush();
  }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Access the full URL
    //     this.currentUrl = this.router.url;
    //     console.log('Current URL:', this.currentUrl);
    //     if(this.currentUrl === '/loading'){
    //       this.bottomNavVisible = false
    //     }else{
    //       this.bottomNavVisible = true;
    //     }
    //   }
    // });
  }

  disablePush() {
    const currentNotifPermission = OneSignal.Notifications.hasPermission();
    console.log(currentNotifPermission, 'current');
  }

  ngOnChanges() {}
}
