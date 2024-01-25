import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from 'src/app/components/header/header.page';
import { IonContent } from '@ionic/angular/standalone';
import { ListPage } from 'src/app/components/list/list.page';
import { OneSignalService } from 'src/app/service/one-signal/one-signal.service';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vue-notifications',
  templateUrl: './vue-notifications.page.html',
  styleUrls: ['./vue-notifications.page.scss'],
  standalone: true,
  imports: [HeaderPage, IonContent, ListPage, CommonModule, FormsModule],
})
export class VueNotificationsPage implements OnInit {
  public notifications!: any;
  private notificationsObs!: Subscription;

  constructor(
    private oneSignalService: OneSignalService,
    private localStorageService: StorageCategoriesPreferenceService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    console.log('depuis ionDidEnter');

    this.notificationsObs = this.oneSignalService
      .getAllNotifications()
      .subscribe((notifications) => {
        this.oneSignalService.updateLocalStorage(notifications);
        if (this.localStorageService.getData('notifications')) {
          this.notifications =
            this.localStorageService.getData('notifications');
        }
      });
  }

  onClick(item: any) {
    // Créer un nouvel objet avec toutes les propriétés de 'item' et mettre isNew à false
    const updatedItem = { ...item, isNew: false };

    // Récupérer le tableau de notifications depuis le localStorage
    const notifications =
      this.localStorageService.getData('notifications') || [];

    // Mettre à jour l'objet correspondant par ID
    const updatedNotifications = notifications.map((notification: any) =>
      notification.id === updatedItem.id ? updatedItem : notification
    );

    // Mettre à jour localStorage avec le tableau mis à jour
    this.localStorageService.setData('notifications', updatedNotifications);

    // Utiliser le tableau mis à jour si nécessaire
    //console.log(updatedNotifications);
  }

  ngOnDestroy() {
    this.notificationsObs.unsubscribe();
  }
}
