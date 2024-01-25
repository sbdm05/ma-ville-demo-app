import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import {
  IonRow,
  IonCol,
  IonGrid,
  IonReorderGroup,
  IonList,
  IonItem,
  IonReorder,
  IonLabel,
  ItemReorderEventDetail,
  IonSkeletonText,
  IonListHeader,
  IonThumbnail,
  IonBadge,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';
import { IconPage } from '../icons/icon/icon.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [
    // IonicModule,

    IonRow,
    IonCol,
    IonGrid,
    CommonModule,
    FormsModule,
    RouterLink,
    IonReorderGroup,
    IonList,
    IonItem,
    IonReorder,
    IonLabel,
    CdkDrag,
    DragDropModule,
    IconPage,
    IonBadge
  ],
})
export class CategoriesPage implements OnInit {
  @Input() mainDatas!: any[];
  @Input() categoryDatas!: any[];
  public reorderedDatas!: any[];
  categoryColors = ['#a10d59', '#0B555A', '#138088', '#909e30'];

  constructor(
    private router: Router,
    private localStorage_cat: StorageCategoriesPreferenceService
  ) {
    this.populateMainDatas();
  }

  populateMainDatas() {
    const categories_pref = this.localStorage_cat.getData(
      'categories_preference'
    );
    if (categories_pref && this.checkRouteToShowGrid()) {
      console.log(categories_pref, 'CATEGORIESPREF');
      this.mainDatas = categories_pref;
    }
  }

  // Function to check the current URL or route
  checkRouteToShowGrid(): boolean {
    // Get the current URL
    const currentUrl = this.router.url;

    // Check the current URL or perform any logic
    // For instance, to show the grid on '/specific-page' route:
    return currentUrl === '/home-page';
  }

  ngOnInit() {}

  ngOnChanges() {
    this.populateMainDatas();
  }

  public onCatNavigate(cat: any) {
    const urlSegment = cat.url ? cat.url : cat.slug; // Choose between cat.url or cat.slug
    this.router.navigateByUrl('/' + urlSegment);
  }

  public drop(event: CdkDragDrop<any[]>) {
    //moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    // console.log(event.previousIndex, event.currentIndex);
    moveItemInArray(this.mainDatas, event.previousIndex, event.currentIndex);
    // save the preference into localStorage
    this.reorderedDatas = [...this.mainDatas];
    this.localStorage_cat.setData('categories_preference', this.reorderedDatas);
  }

  ngOnDestroy() {
    // Check if mainDatas exists and then clear it or perform necessary cleanup
    if (this.mainDatas) {
      this.mainDatas = []; // Clearing the array
      // Perform other cleanup tasks if needed
    }
  }
}
