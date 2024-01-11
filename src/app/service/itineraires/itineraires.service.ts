import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItinerairesService {
  public itinerairesUrl =
    'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/itineraires';
  public subCatUrl =
    'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/categories?parent';
  public rootImageObj =
    'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/media';

  constructor(private http: HttpClient) {}

  // récupères toutes les categories dynamiquement
  // public getAllItinerairesCategories() {
  //   return this.http.get<any[]>(this.itinerairesUrl).pipe(
  //     map((posts) => {
  //       // Récupère les IDs des catégories
  //       const categoriesIds = posts.reduce((acc, post) => {
  //         return acc.concat(post.categories);
  //       }, []);

  //       // Supprime les doublons d'IDs de catégorie
  //       const uniqueCategoriesIds = Array.from(new Set(categoriesIds));

  //       // Récupère les détails des catégories à partir de leurs IDs
  //       return this.http.get<any[]>(
  //         `https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/categories?include=${uniqueCategoriesIds.join(
  //           ','
  //         )}`
  //       );
  //     })
  //   );
  // }

  public getAllSubItinerairesSubCategories(): Observable<any[]> {
    const BALADES_ID = '10';
    return this.http.get<any[]>(`${this.subCatUrl}=${BALADES_ID}`);
  }

  public getPlacesByCategory(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.itinerairesUrl}?categories=${id}`);
  }

  public getCategoryImage(id: number): Observable<any> {
    return this.http.get<any>(`${this.rootImageObj}/${id}`);
  }
}
