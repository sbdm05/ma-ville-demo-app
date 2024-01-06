import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriesPage } from 'src/app/components/categories/categories.page';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { catHome } from 'src/app/shared/categories';

@Component({
  selector: 'app-shoopping-categories',
  templateUrl: './shoopping-categories.page.html',
  styleUrls: ['./shoopping-categories.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    CategoriesPage,
    CommonModule,
    FormsModule,
  ],
})
export class ShooppingCategoriesPage implements OnInit {
  public title: string = 'Boutiques';
  public category!: any[]

  constructor() {}

  ngOnInit() {
    this.category = catHome.filter((item) => item.slug === 'shopping');
    console.log(this.category[0].categories);
  }
}
