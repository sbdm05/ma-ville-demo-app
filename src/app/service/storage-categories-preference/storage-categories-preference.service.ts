import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageCategoriesPreferenceService {
  constructor() {}
  setData(key: string, data: any): void {
    if (key === 'fav') {
      // ici on store un tableau
      if (this.getData('fav')) {
        let datasAlreadySaved = this.getData('fav');
        //console.log(datasAlreadySaved, 'already saved');
        // vérifier si valeur existante
        const match = datasAlreadySaved.find((e: any) => data.id === e.id);
        console.log(match, 'yes');
        if (match) {
          console.log('already saved');
        } else {
          // Ajouter une valeur au tableau
          datasAlreadySaved = [...datasAlreadySaved, data];
          // Mettre à jour le local storage avec le tableau modifié
          localStorage.setItem(key, JSON.stringify(datasAlreadySaved));
        }
      } else {
        localStorage.setItem(key, JSON.stringify([data]));
      }
    } else if (key === 'categories_preference')
      localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
