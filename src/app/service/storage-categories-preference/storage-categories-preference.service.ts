import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageCategoriesPreferenceService {
  public favDatas$: BehaviorSubject<any>= new BehaviorSubject([])
  constructor() {}
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
    } else if (key === 'categories_preference')
      localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
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

  clearAll(): void {
    localStorage.clear();
  }
}
