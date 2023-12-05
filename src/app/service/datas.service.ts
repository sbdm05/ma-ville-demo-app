import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { catchError, forkJoin, map, mergeMap, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormMessage } from '../types/form/form';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  private base_url = environment.base_url;

  constructor(private http: HttpClient, private platform: Platform) {}

  // getTest() {
  //   const url = 'https://jsonplaceholder.typicode.com/todos/1';

  //   return CapacitorHttp.request({
  //     method: 'GET',
  //     url: url,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add any other headers if needed
  //     },
  //   });
  // }

  getNewsPosts() {
    return this.http
      .get<any[]>(`https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/posts`)
      .pipe(
        mergeMap((posts) => {
          // Use forkJoin to combine multiple observables into a single array.
          return forkJoin(
            posts.map((post) => {
              console.log(post);
              const featuredMediaId = post.featured_media;
              console.log(featuredMediaId);
              return this.http
                .get<any>(
                  `https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/media/${featuredMediaId}`
                )
                .pipe(
                  map((media) => {
                    console.log(media);
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
                    };
                  })
                );
            })
          );
        })
      );
  }

  getAllCategories() {
    return this.http.get<any>(`${this.base_url}/wp-json/wp/v2/categories`);
  }

  sendMessage(obj: FormMessage) {
    console.log(obj)
    return this.http
      .post<any>(`${this.base_url}/wp-json/custom/v1/send-email`, obj)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);

    // You can customize the error handling here, for example, by returning a specific error message or re-throwing the error.
    const errorMessage =
      'An error occurred while sending the message. Please try again later.';
    return throwError(() => error);
  }

  getKiosquePosts() {
    return this.http
      .get<any[]>(`${this.base_url}/wp-json/wp/v2/create_publications`)
      .pipe(
        mergeMap((posts) => {
          // Use forkJoin to combine multiple observables into a single array.
          return forkJoin(
            posts.map((post) => {
              const featuredMediaId = post.featured_media;
              return this.http
                .get<any>(
                  `${this.base_url}/wp-json/wp/v2/media/${featuredMediaId}`
                )
                .pipe(
                  map((media) => {
                    // Map the response structure to match your desired structure for each post.
                    return {
                      id: post.id,
                      title: post.title.rendered,
                      content: post.content.rendered,
                      urlLink: post.meta.url_link,
                      featuredImage: {
                        id: media.id,
                        imageUrl: media.guid.rendered,
                        title: media.title.rendered,
                      },
                    };
                  })
                );
            })
          );
        })
      );
  }

  getPostDetails(id: number) {
    return this.http.get(`${this.base_url}/wp-json/wp/v2/posts/${id}`).pipe(
      mergeMap((post: any) => {
        const featuredMediaId = post.featured_media;
        return this.http
          .get<any>(`${this.base_url}/wp-json/wp/v2/media/${featuredMediaId}`)
          .pipe(
            map((media) => {
              // Map the response structure to match your desired structure for the post.
              return {
                id: post.id,
                title: post.title.rendered,
                content: post.content.rendered,
                featuredImage: {
                  id: media.id,
                  imageUrl: media.guid.rendered,
                  title: media.title.rendered,
                },
              };
            })
          );
      })
    );
  }

  getWorksSitesAddress() {
    return this.http.get<any[]>(
      `${this.base_url}/wp-json/wp/v2/create_address/`
    );
  }
}
