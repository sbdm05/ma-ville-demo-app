import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { IconPage } from '../icons/icon/icon.page';
import { Router } from '@angular/router';
import { CategoryDirective } from 'src/app/shared/directives/category.directive';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonContent,
    CommonModule,
    FormsModule,
    IconPage,
    IonBadge,
    CategoryDirective,
  ],
})
export class ListPage implements OnInit {
  @Input() savedData!: any[];
  @Input() savedNotifications!: any[];

  @Input() hightLightTerm!: string;
  @Output() clickedItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.savedData);
    console.log(this.hightLightTerm);
    this.savedData = this.highLightTerm(this.savedData, this.hightLightTerm);
  }

  private highLightTerm(tab: any[], term: string) {
    type TabType = { [key: string]: string | number };
    if (!term || !tab || tab.length === 0) {
      return tab;
    }

    const regex = new RegExp(term, 'gi');

    // Utilisez map pour créer un nouveau tableau avec les termes de recherche mis en évidence
    return tab.map((item) => {
      const highlightedText = Object.entries(item).reduce(
        (acc, [key, value]) => {
          if (typeof value === 'string') {
            acc[key] = (value as string).replace(
              regex,
              (match) => `<strong>${match}</strong>`
            );
          } else {
            acc[key] = value as string;
          }
          return acc;
        },
        {} as { [key: string]: string | number }
      );
      return highlightedText;
    });
  }

  // Dans votre composant
  trackById(index: number, item: any): string {
    return item.id; // Assurez-vous que votre objet a une propriété "title"
  }

  onReadMore(item: any) {
    console.log(item);
    // update localStorage avec isNew à false sur cet item.
    this.clickedItem.emit(item);

    if (item.type === 'événement') {
      this.router.navigate(['agenda', item.id]);
    } else if (item.type === 'articles') {
      this.router.navigate(['actus', item.id]);
    } else if (item.name === 'actus') {
      this.router.navigate(['actus', item.data.post_id]);
    } else if (item.name === 'chantiers') {
      this.router.navigate(['chantiers']);
    }
  }
}
