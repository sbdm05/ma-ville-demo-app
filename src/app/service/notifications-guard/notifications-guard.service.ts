import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { OneSignalService } from '../one-signal/one-signal.service';
import { StorageCategoriesPreferenceService } from '../storage-categories-preference/storage-categories-preference.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsGuardService {
  private notificationsObs!: Subscription;
  constructor(
    private oneSignalService: OneSignalService,
    private localStorageService: StorageCategoriesPreferenceService
  ) {}

  public currentNotif: BehaviorSubject<any> = new BehaviorSubject(0);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Logique à exécuter avant la navigation

    // ici je veux faire un appel et comparer
    this.notificationsObs = this.oneSignalService
      .getAllNotifications()
      .subscribe((notifications) => {
        this.oneSignalService.updateLocalStorage(notifications);
        if (this.localStorageService.getData('notifications')) {
          console.log(
            this.localStorageService.getData('notifications'),
            'depuis notifguard'
          );
          // je veux vérifier les elements du localstorage, si un element a la propriété isNew à true,
          // alors, je veux incrementer un compteur de 1
          const currentLocalStorage =
            this.localStorageService.getData('notifications');

          const filteredTab = currentLocalStorage.filter(
            (item: any) => item.isNew === true
          );
          console.log(filteredTab.length, 'filteredTab');
          this.currentNotif.next(filteredTab.length);
        }
      });

    return true; // ou false en fonction de votre logique
  }
}

export const NotifGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(NotificationsGuardService).canActivate(next, state);
};
