import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  public urlShopping =
    'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/shopping?categories';
  constructor(private http: HttpClient) {}

  // public getAllVenues(): Observable<any[]> {
  //   return this.http.get<any[]>(this.urlShopping);
  // }
  private getAllCategoriesVenues(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/categories'
    );
  }

  getCatByName(name: string): Observable<any> {
    return this.getAllCategoriesVenues().pipe(
      switchMap((categories) => {
        const catRequested = categories.find((category) => category.slug === name);
        if (!catRequested) {
          throw new Error(`La catégorie "${name}" n'a pas été trouvée.`);
        }
        return this.http.get<any[]>(`${this.urlShopping}=${catRequested.id}`);
      }),
      catchError((error) => {
        throw new Error(`Erreur de récupération de la catégorie : ${error}`);
      })
    );
  }
}
