import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, map, mergeMap, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormMessage } from '../types/form/form';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  private base_url = environment.base_url;

  constructor(private http: HttpClient) {}

  getNewsPosts() {
    return this.http.get<any>(`${this.base_url}/wp-json/wp/v2/posts`);
  }

  getAllCategories() {
    return this.http.get<any>(`${this.base_url}/wp-json/wp/v2/categories`);
  }

  sendMessage(obj: FormMessage) {
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
  return this.http.get<any[]>(`${this.base_url}/wp-json/wp/v2/create_publications`).pipe(
    mergeMap((posts) => {
      // Assuming there are multiple posts, map each post to the desired structure.
      return posts.map((post) => {
        const featuredMediaId = post.featured_media;

        return this.http.get<any>(`${this.base_url}/wp-json/wp/v2/media/${featuredMediaId}`).pipe(
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
      });
    })
  );
}



}
