import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from 'src/app/service/shopping/shopping.service';
import { ModalController } from '@ionic/angular';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonSpinner,
  IonTitle,
  IonToolbar,
  Platform,
} from '@ionic/angular/standalone';
import { LeafletMapComponent } from 'src/app/components/leaflet-map/leaflet-map.component';
import * as L from 'leaflet';
import { IonFabPageIcons } from 'src/app/components/ion-fab/ion-fab.page';
import { ModalPage } from 'src/app/components/modal/modal.page';

@Component({
  selector: 'app-vue-shopping-details-categories',
  templateUrl: './vue-shopping-details-categories.page.html',
  styleUrls: ['./vue-shopping-details-categories.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonSpinner,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    LeafletMapComponent,
    IonFabPageIcons,
    ModalPage,
  ],
})
export class VueShoppingDetailsCategoriesPage implements OnInit {
  public title: string = 'Shopping';
  public id!: string;
  public datas!: [];
  mapChantiers!: L.Map;
  public errorMsg!: string;
  public loaded: boolean = false;
  public mapId: string = 'map-shopping'

  constructor(
    private activatedRoute: ActivatedRoute,
    private shoppingService: ShoppingService,
    private cdr: ChangeDetectorRef,
    private modalCtrl: ModalController
  ) {

    if (this.mapChantiers) {
      this.mapChantiers.remove();
      this.mapChantiers.off();
    }
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.title = String(id);
      if (id) {
        console.log(id);
        this.id = id;
        this.shoppingService.getCatByName(this.id).subscribe({
          next: (data) => {
            this.datas = data;
            this.initMap();
          },
          error: (e) => {
            console.log(e);
            this.errorMsg = 'Désolé, aucune offre ne correspond à ce critère';
            console.log(this.errorMsg);
          },
        });
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    //this.initMap();
  }

  public async initMap() {
    if (!this.mapChantiers) {
      this.mapChantiers = new L.Map(this.mapId).setView([48.992128, 2.2779189], 15);

      const mapLayer = await L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
        }
      ).addTo(this.mapChantiers);
      if (mapLayer && this.datas) {
        console.log(this.datas, 'inside map');
        await this.addMarkers(this.datas);
        // afficher le favicon que si les markers existent
        //this.loaded = true;
      }
    } else {
      ('already dans le else');
      this.mapChantiers.remove();
      this.mapChantiers.off();
    }
  }

  public async addMarkers(datas: any[]) {
    //const coordinates: any[] = [];
    // itérer dans le tableau et ajouter des markeurs
    console.log(this.datas, 'this.datas');

    if (datas) {
      console.log(this.datas);

      datas.forEach((data) => {
        let marker = L.marker([data.acf.adresse.lat, data.acf.adresse.lng]);

        const DIV = `
        <div>
          <h5>${data.title.rendered}</h5>
          <h6>Adresse : ${data.acf.adresse.address}</h6>
          <h6>Tél : ${data.acf.telephone}</h6>
        </div>`;
        marker.bindPopup(DIV);
        console.log(this.mapChantiers, 'depuis ligne 91');
        if (this.mapChantiers && marker) {
          console.log(this.mapChantiers, 'depuis ligne 92');
          this.mapChantiers.addLayer(marker);
        }

        // Add coordinates to the array
      });
    }
  }

  public async onIconClicked() {
    console.log(this.datas);
    // ouverture de la modal
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        placesToShop: this.datas,
      },
      breakpoints: [0, 0.3],
      initialBreakpoint: 1,
    });
    console.log(modal, 'MODAL');
    await modal.present();
  }

  ngOnDestroy() {
    if(this.mapChantiers){
      this.mapChantiers.remove();
    this.mapChantiers.off();
    }

  }
}
