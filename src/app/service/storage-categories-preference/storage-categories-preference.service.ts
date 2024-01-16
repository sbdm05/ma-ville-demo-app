import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageCategoriesPreferenceService {
  public favDatas$: BehaviorSubject<any> = new BehaviorSubject([]);
  public emailSentDatas$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {
    console.log('dans le service');

    const storedData = localStorage.getItem('fav');
    const emailSentData = localStorage.getItem('email-sent');

    if (storedData) {
      this.favDatas$.next(JSON.parse(storedData));
    }
    if (emailSentData) {
      this.emailSentDatas$.next(JSON.parse(emailSentData));
    }
  }
  setData(key: string, data: any): void {
    if (key === 'fav') {
      // ici on store un tableau
      if (this.getData('fav')) {
        let datasAlreadySaved = this.getData('fav');

        const match = datasAlreadySaved.find((e: any) => data.id === e.id);

        if (match) {
          const filteredTab = datasAlreadySaved.filter(
            (e: any) => e.id !== data.id
          );

          localStorage.setItem(key, JSON.stringify(filteredTab));
          this.favDatas$.next(filteredTab);
        } else {
          data.saved = true;
          datasAlreadySaved = [...datasAlreadySaved, data];
          localStorage.setItem(key, JSON.stringify(datasAlreadySaved));

          // gestion du behaviorSubject
          this.favDatas$.next(datasAlreadySaved);
        }
      } else {
        data.saved = true;
        localStorage.setItem(key, JSON.stringify([data]));
        // gestion du behaviorSubject
        this.favDatas$.next([data]);
      }
    } else if (key === 'categories_preference') {
      localStorage.setItem(key, JSON.stringify(data));
    } else if (key === 'email-sent') {
      if (this.getData('email-sent')) {
        let datasAlreadySaved = this.getData('email-sent');
        const copyWithoutPicture = { ...data };
        delete copyWithoutPicture.picture;

        datasAlreadySaved = [...datasAlreadySaved, copyWithoutPicture];
        localStorage.setItem(key, JSON.stringify(datasAlreadySaved));
        // gestion du behaviorSubject
        this.emailSentDatas$.next(datasAlreadySaved);
      } else {
        const copyWithoutPicture = { ...data };
        delete copyWithoutPicture.picture;
        localStorage.setItem(key, JSON.stringify([copyWithoutPicture]));
        this.emailSentDatas$.next(copyWithoutPicture);
      }
    } else if (key === 'notif-status'){
      localStorage.setItem('notif-status', data)
    }
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    if (key === 'fav') {
      this.favDatas$.next(data);
    } else if (key === 'email-sent') {
      this.emailSentDatas$.next(data);
    }
    return data ? JSON.parse(data) : null;
  }

  getDataById(key: string, id: number): any {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        const resDatas = JSON.parse(data);

        // Ensure that resDatas is an array before using array methods
        if (Array.isArray(resDatas)) {
          const match = resDatas.find((e: any) => id === e.id);

          if (match) {
            match.saved = true;
            return match;
          }
        } else {
          console.error('Data in local storage is not an array.');
        }
      } catch (error) {
        console.error('Error parsing JSON data from local storage:', error);
      }
    }

    return null;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  updateData(key: string, data: any) {
    if (key === 'fav') {
      localStorage.setItem('fav', JSON.stringify(data));
    }
    if(key === 'email'){
      localStorage.setItem('email-sent', JSON.stringify(data));
    }
  }

  clearAll(): void {
    localStorage.clear();
  }
}
