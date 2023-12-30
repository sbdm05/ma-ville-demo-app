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
    const categories_pref = this.localStorage_cat.getData(
      'categories_preference'
    );
    if (categories_pref) {
      console.log(categories_pref, 'CATEGORIESPREF')
      this.mainDatas = categories_pref;
    }
  }

  ngOnInit() {}

  ngOnChanges(){
    const categories_pref = this.localStorage_cat.getData(
      'categories_preference'
    );
    if (categories_pref) {
      console.log(categories_pref, 'CATEGORIESPREF');
      this.mainDatas = categories_pref;
    }
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
}
