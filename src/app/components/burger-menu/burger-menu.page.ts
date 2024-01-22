import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { catHome } from 'src/app/shared/categories';
import { IconPage } from '../icons/icon/icon.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.page.html',
  styleUrls: ['./burger-menu.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule,
    IconPage,
    IonFooter
  ],
})
export class BurgerMenuPage implements OnInit {
  @Input() contentId!: string;
  public categories = catHome;

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick(item: any){
    this.router.navigate([item.slug])
  }
}
