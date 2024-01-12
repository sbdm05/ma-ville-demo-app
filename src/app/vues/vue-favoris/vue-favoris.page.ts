import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';
import { HeaderPage } from 'src/app/components/header/header.page';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vue-favoris',
  templateUrl: './vue-favoris.page.html',
  styleUrls: ['./vue-favoris.page.scss'],
  standalone: true,
  imports: [IonContent, IonList,IonItem, IonLabel, CommonModule, FormsModule, HeaderPage],
})
export class VueFavorisPage implements OnInit {
  public title: string = 'Mes favoris';
  public datas!: any[] ;

  constructor(private favorisService: StorageCategoriesPreferenceService) {
    // souscrit à l'obs
    this.favorisService.favDatas$.subscribe({
      next: (data) => {
        this.datas = data;
        console.log(data,this.datas);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnInit() {}
}
