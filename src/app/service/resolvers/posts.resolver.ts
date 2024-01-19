import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DatasService } from '../datas.service';

@Injectable({
  providedIn: 'root',
})
export class PostsResolver  {
  constructor(private datasService: DatasService) {
    console.log('resolver appelé')
  }
  resolve(): Observable<any> {
    return this.datasService.getNewsPosts_last_month();
  }
}
