import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { FormPage } from 'src/app/components/forms/form/form.page';
import { CategoriesPage } from 'src/app/components/categories/categories.page';
import { catHome } from 'src/app/shared/categories';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vue-signal',
  templateUrl: './vue-signal.page.html',
  styleUrls: ['./vue-signal.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    CommonModule,
    FormsModule,
    FormPage,
    CategoriesPage,
  ],
})
export class VueSignalPage implements OnInit {
  public title = 'Signaler';
  public backBtn = 'Retour';
  public category!: any;

  constructor() {}

  ngOnInit() {
    this.category = catHome.filter((item) => item.slug === 'signaler');
    console.log(this.category[0].categories);
  }
}
