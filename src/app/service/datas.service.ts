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

  getNewsPosts() {
    return this.http
      .get<any[]>(`https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/posts`)
      .pipe(
        mergeMap((posts) => {
          // Use forkJoin to combine multiple observables into a single array.
          return forkJoin(
            posts.map((post) => {
              //console.log(post);
              const featuredMediaId = post.featured_media;
              //console.log(featuredMediaId);
              return this.http
                .get<any>(
                  `https://ma-ville-demo.ohmycode.io/wp-json/wp/v2/media/${featuredMediaId}`
                )
                .pipe(
                  map((media) => {
                    //console.log(media);
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
    console.log(obj);
    return this.http
      .post<any>(`${this.base_url}/wp-json/custom/v1/send-email`, obj)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);

    let errorMessage =
      'An error occurred while sending the message. Please try again later.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error && error.error && error.error.text === 'Email sent successfully') {
        // Perform actions if the text property is "Email sent successfully"
        console.log('Email was sent successfully from the service!');
        return throwError('Email sent successfully');
      } else {
        // Handle other cases
        console.log('Email sending failed or different error occurred.');
      }
      errorMessage = `Server-side error: ${error.status}, ${error.error.message}`;
      // You can also log additional details such as error.error for more specific information from the server response.
    }

    return throwError(errorMessage);
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
