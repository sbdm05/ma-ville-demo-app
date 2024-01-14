import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';
import { HeaderPage } from 'src/app/components/header/header.page';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { IconPage } from 'src/app/components/icons/icon/icon.page';
import { CategoryDirective } from 'src/app/shared/directives/category.directive';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vue-favoris',
  templateUrl: './vue-favoris.page.html',
  styleUrls: ['./vue-favoris.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule,
    HeaderPage,
    IconPage,
    IonBadge,
    CategoryDirective,
    ExploreContainerComponent,
    IonButton,
    RouterLink,
  ],
})
export class VueFavorisPage implements OnInit {
  public title: string = 'Mon activité';
  public datas!: any[];
  public emailSent$!: Observable<any>;

  constructor(private favorisService: StorageCategoriesPreferenceService) {
    //this.favorisService.getData('fav')
    this.emailSent$ = this.favorisService.emailSentDatas$

    // souscrit à l'obs
    this.favorisService.favDatas$.subscribe({
      next: (data) => {
        this.datas = data;
        console.log(data, this.datas);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnInit() {}

  public onDelete(obj: any) {
    console.log(obj.id);

    // filtrer datas
    const filteredDatas = this.datas.filter((e) => e.id !== obj.id);
    console.log(filteredDatas);
    this.favorisService.favDatas$.next(filteredDatas);
    this.favorisService.updateData('fav', filteredDatas);
  }
}
