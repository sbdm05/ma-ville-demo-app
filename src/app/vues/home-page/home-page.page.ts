import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { HomePostsPage } from '../../components/home/home-posts/home-posts.page';
import { CategoriesPage } from 'src/app/components/categories/categories.page';
import { catHome } from 'src/app/shared/categories';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';
import { BurgerMenuPage } from 'src/app/components/burger-menu/burger-menu.page';

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
    IonMenuButton
  ],
})
export class HomePagePage implements OnInit {
  public categories = catHome;
  public confirmed!: any;
  public colorBg = '#138088';

  public onData(value: Event) {
    this.confirmed = value;
    console.log(this.confirmed);
  }

  constructor() {
    // console.log('depuis homepage');
  }

  ngOnInit() {}
}
