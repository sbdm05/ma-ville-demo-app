import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItinerairesService {
  public itinerairesUrl =
    'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/itineraires';
  public subCatUrl =
    'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/categories?parent';
  public rootImageObj = 'https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/media';

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

  // public getPlacesByCategory(id: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.itinerairesUrl}?categories=${id}`);
  // }

   public getPlacesByCategory(id: string) {
    return this.http.get<any[]>(`${this.itinerairesUrl}?categories=${id}`)
      .pipe(
        mergeMap((posts) => {
          // Use forkJoin to combine multiple observables into a single array.
          return forkJoin(
            posts.map((post) => {
              console.log(post);
              const featuredMediaId = post.featured_media;
              //console.log(featuredMediaId);
              return this.http
                .get<any>(
                  `https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/media/${featuredMediaId}`
                )
                .pipe(
                  map((media) => {
                    //console.log(media, 'depuis itineraires service');
                    // Map the response structure to match your desired structure for each post.
                    return {
                      id: post.id,
                      title: post.title.rendered,
                      content: post.content.rendered,
                      featuredImage: {
                        id: media.id,
                        imageUrl: media.guid.rendered,
                        title: media.title.rendered,
                      },
                      acf: {
                        adresse: post.acf.adresse.address,
                        enregistrement: post.acf.enregistrement,
                        lat: post.acf.adresse.lat,
                        lng: post.acf.adresse.lng,
                      },
                    };
                  })
                );
            })
          );
        })
      );
  }

  public getCategoryImage(id: number): Observable<any> {
    return this.http.get<any>(`${this.rootImageObj}/${id}`);
  }
}
