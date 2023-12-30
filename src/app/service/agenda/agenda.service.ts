import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  public urlAgenda =
    'https://ma-ville-demo.ohmycode.io/wp-json/tribe/events/v1/events';
  constructor(private http: HttpClient) {}

  public getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.urlAgenda);
  }

  public getEventDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlAgenda}/${id}`);
  }
}
