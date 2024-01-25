import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { HomePostsPage } from '../../components/home/home-posts/home-posts.page';
import { CategoriesPage } from 'src/app/components/categories/categories.page';
import { catHome } from 'src/app/shared/categories';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';
import { BurgerMenuPage } from 'src/app/components/burger-menu/burger-menu.page';
import { OneSignalService } from 'src/app/service/one-signal/one-signal.service';
import { Subscription } from 'rxjs';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';
import { NotificationsGuardService } from 'src/app/service/notifications-guard/notifications-guard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: true,
  imports: [
    // IonicModule,
    CommonModule,
    FormsModule,
    HomePostsPage,
    CategoriesPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    SkeletonPage,
    BurgerMenuPage,
    IonMenuButton,
  ],
})
export class HomePagePage implements OnInit {
  public categories = catHome;
  public confirmed!: any;
  public colorBg = '#138088';
  public nberOfNotif!: any;

  public onData(value: Event) {
    this.confirmed = value;
    console.log(this.confirmed);
  }

  constructor(
    private notificationsGuard: NotificationsGuardService
  ) {
    this.notificationsGuard.currentNotif.subscribe({
      next: (data)=>{
        console.log(data)
        const notifObj: any = this.categories.find(cat => cat.slug === 'notifications')
        Object.assign(notifObj, {notifications : data})
        console.log(notifObj);

      }
    })
  }

  ngOnInit() {}

  ionViewDidEnter() {}

  ngOnDestroy() {}
}
