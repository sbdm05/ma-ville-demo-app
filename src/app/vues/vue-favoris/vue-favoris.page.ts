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
import { Observable, Subscription } from 'rxjs';

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
  public favDatas!: any[];
  public emailDatas!: any[];
  public subscriptionEmailSent!: Subscription;
  private subscriptionFavoris!: Subscription;

  constructor(private favorisService: StorageCategoriesPreferenceService) {
    //this.favorisService.getData('fav')
    this.subscriptionEmailSent = this.favorisService.emailSentDatas$.subscribe({
      next: (data) => {
        this.emailDatas = data;
        console.log(data, this.emailDatas);
      },
      error: (e) => {
        console.log(e);
      },
    });

    // souscrit à l'obs
    this.subscriptionFavoris = this.favorisService.favDatas$.subscribe({
      next: (data) => {
        this.favDatas = data;
        console.log(data, this.favDatas);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnInit() {}

  public onDelete(obj: any, type: string) {
    if (type === 'fav') {
      //console.log(obj.id);

      // filtrer datas
      const filteredDatas = this.favDatas.filter((e) => e.id !== obj.id);
      console.log(filteredDatas);
      this.favorisService.favDatas$.next(filteredDatas);
      this.favorisService.updateData('fav', filteredDatas);
    }
    if (type === 'email') {
      console.log(obj);
      // filtrer datas
      const filteredDatas = this.emailDatas.filter((e) => e.id !== obj.id);
      console.log(filteredDatas);
      this.favorisService.emailSentDatas$.next(filteredDatas);
      this.favorisService.updateData('email', filteredDatas);
    }
  }

  ngOnDestroy() {
    if (this.subscriptionFavoris) {
      this.subscriptionFavoris.unsubscribe();
    }
    if (this.subscriptionEmailSent) {
      this.subscriptionEmailSent.unsubscribe();
    }
  }
}
