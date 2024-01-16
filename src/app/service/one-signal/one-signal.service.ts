import { Injectable } from '@angular/core';
import OneSignal, { OneSignalPlugin } from 'onesignal-cordova-plugin';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StorageCategoriesPreferenceService } from '../storage-categories-preference/storage-categories-preference.service';

@Injectable({
  providedIn: 'root',
})
export class OneSignalService {
  public notifStatus$: Subject<boolean> = new Subject();

  constructor(private statusStorage: StorageCategoriesPreferenceService) {
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
}
