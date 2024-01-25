import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import OneSignal, { OneSignalPlugin } from 'onesignal-cordova-plugin';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StorageCategoriesPreferenceService } from '../storage-categories-preference/storage-categories-preference.service';

@Injectable({
  providedIn: 'root',
})
export class OneSignalService {
  public notifStatus$: Subject<boolean> = new Subject();
  public url: string = 'https://ma-ville-demo.ohmycode.io';

  constructor(
    private statusStorage: StorageCategoriesPreferenceService,
    private http: HttpClient
  ) {
    this.getStatus();
  }

  getStatus() {
    const currentStatus = this.statusStorage.getData('notif-status');
    return currentStatus;
  }

  public changeStatus(currentStatus: boolean) {
    //console.log(currentStatus);
    //currentStatus = !currentStatus;
    if (!currentStatus) {
      //console.log('not currentStatus');

      this.notifStatus$.next(false);

      // stocker valeur dans localStorage
      this.statusStorage.setData('notif-status', currentStatus);
      OneSignal.User.pushSubscription.optOut();
    } else {
      //console.log('currentStatus is true', currentStatus);

      this.notifStatus$.next(true);

      this.statusStorage.setData('notif-status', currentStatus);
      OneSignal.User.pushSubscription.optIn();
      // here i need to reflect that on the settings of the phone
    }
  }

  // le plus simple ici c'est de créer un nouveau endpoint sur wordpress
  // on appelle ce endpoint ici
  // c'est ce endpoint qui contient bearer token

  getAllNotifications() {
    return this.http.get<any>(`${this.url}/get-all-notifications`);
  }

  updateLocalStorage(notificationsFromDB: any): void {
    // on récupère les notifs de la BDD
    const notificationsFromDBTab = notificationsFromDB.notifications;

    // on récupère le localStorage
    const notificationsString = localStorage.getItem('notifications');
    const retrievedNotifications = notificationsString
      ? JSON.parse(notificationsString)
      : [];

    // situation où pas de localStorage
    if (retrievedNotifications.length === 0) {
      localStorage.setItem(
        'notifications',
        JSON.stringify(notificationsFromDB.notifications)
      );
    } else {
      // situation présence de localStorage
      // Comparer le contenu avec le localStorage
      const updatedNotifications = notificationsFromDBTab.map(
        (newItem: any) => {
          const existingItem = retrievedNotifications.find(
            (item: any) => item.id === newItem.id
          );

          if (existingItem) {
            // L'élément existe déjà, ne rien faire

            return existingItem;
          } else {
            // Nouvel élément, marquer comme isNew = true
            return { ...newItem, isNew: true };
          }
        }
      );

      console.log(updatedNotifications, 'updated Tab');


      // Mettre à jour le localStorage avec les nouvelles notifications
      localStorage.setItem(
        'notifications',
        JSON.stringify(updatedNotifications)
      );
    }
  }
}
