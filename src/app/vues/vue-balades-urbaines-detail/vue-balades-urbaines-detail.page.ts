import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LeafletMapComponent } from 'src/app/components/leaflet-map/leaflet-map.component';
import * as L from 'leaflet';
import { ItinerairesService } from 'src/app/service/itineraires/itineraires.service';
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
import { IonFabPageIcons } from 'src/app/components/ion-fab/ion-fab.page';
import { ModalPage } from 'src/app/components/modal/modal.page';
import { ModalController } from '@ionic/angular';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';

@Component({
  selector: 'app-vue-balades-urbaines-detail',
  templateUrl: './vue-balades-urbaines-detail.page.html',
  styleUrls: ['./vue-balades-urbaines-detail.page.scss'],
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
    ModalPage,
    IonFabPageIcons,
    SkeletonPage
  ],
})
export class VueBaladesUrbainesDetailPage implements OnInit {
  public id!: string;
  public datas!: any[];
  public title: string = 'Balades';
  map!: L.Map;
  public errorMsg!: string;
  public loaded: boolean = false;
  public mapId: string = 'map-balades';


  constructor(
    public plt: Platform,
    private activatedRoute: ActivatedRoute,
    private itinerairesService: ItinerairesService,
    private modalCtrl: ModalController
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        console.log(id);
        this.id = id;
        // call to retrieve all the objects.
        this.itinerairesService.getPlacesByCategory(id).subscribe({
          next: (data) => {
            console.log(data);
            if (data) {
              this.datas = data;
              //this.addMarkers(this.datas);
              console.log(this.datas, 'just after line 59');
              this.initMap();
            }
            // this.categories = data;
          },
          error: (e) => {
            console.log(e);
            this.errorMsg = 'Désolé, aucune offre ne correspond à ce critère';
          },
        });
      }
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      console.log(this.datas, 'depuis ligne 77');
      //this.initMap();
      //this.addMarkers(this.datas);
    });
  }

  ngAfterViewInit() {
    //this.initMap();
  }

  public async initMap() {
    if (!this.map) {
      this.map = await new L.Map(this.mapId).setView([48.992128, 2.2779189], 15);

      const mapLayer = await L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
        }
      ).addTo(this.map);
      if (mapLayer && this.datas) {
        console.log(this.datas, 'inside map');
        await this.addMarkers(this.datas);
        // afficher le favicon que si les markers existent
        this.loaded = true;
      }
    } else {
      this.map.remove();
      this.map.off();
    }
  }

  public async addMarkers(datas: any[]) {
    const coordinates: any[] = [];
    // itérer dans le tableau et ajouter des markeurs
    console.log(this.datas, 'this.datas');

    if (datas) {
      console.log(this.datas);

      datas.forEach((data) => {
        let marker = L.marker([data.acf.lat, data.acf.lng]);

        const DIV = `
        <div>
          <h5>${data.title}</h5>
          <h6>${data.acf.adresse}</h6>
          <img src='${data.featuredImage.imageUrl}' width='150'/ >

        </div>`;
        marker.bindPopup(DIV);
        //console.log(this.map, 'depuis ligne 91');
        if (this.map && marker) {
          //console.log(this.map, 'depuis ligne 92');
          this.map.addLayer(marker);
        }

        // Add coordinates to the array
        //coordinates.push([data.acf.adresse.lat, data.acf.adresse.lng]);
      });

      // if (coordinates && coordinates.length >= 2) {
      //   const polyline = L.polyline(coordinates)?.addTo(this.map);
      //   // Autres actions à effectuer si la condition est vraie
      // }
    }
  }

  public async onIconClicked() {
    console.log(this.datas);
    // ouverture de la modal
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        placesToVisit: this.datas,
      },
      breakpoints: [0, 0.3],
      initialBreakpoint: 1,
    });
    console.log(modal, 'MODAL');
    await modal.present();
  }
}
