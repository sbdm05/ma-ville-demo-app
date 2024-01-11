import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from 'src/app/service/agenda/agenda.service';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IconPage } from 'src/app/components/icons/icon/icon.page';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';

@Component({
  selector: 'app-vue-agenda-details',
  templateUrl: './vue-agenda-details.page.html',
  styleUrls: ['./vue-agenda-details.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IconPage,
  ],
})
export class VueAgendaDetailsPage implements OnInit {
  public event!: any;
  public title: string = 'Evénement';
  public favDatas!: any[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private agendaService: AgendaService,
    private favorisService: StorageCategoriesPreferenceService
  ) {
    //
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      // ici on vérifie le localStorage
      // si présent dans localStorage alors this.event = event du localstorage
      // sinon, on fait la suite
      if (id) {
        this.agendaService.getEventDetails(id).subscribe((event) => {
          console.log(event);

          this.event = event;
          this.title = event.title;
        });
      }
    });
  }

  public onSave(item: any) {
    console.log('saved');

    // stocker l'objet dans le localStorage
    this.favorisService.setData('fav', item );
  }
}
