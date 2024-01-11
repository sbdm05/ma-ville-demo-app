import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { GoogleMapPage } from 'src/app/components/google-map/google-map.page';
import { DatasService } from 'src/app/service/datas.service';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
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
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';
import { tap } from 'rxjs';

@Component({
  selector: 'app-vue-works-sites',
  templateUrl: './vue-works-sites.page.html',
  styleUrls: ['./vue-works-sites.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapPage,
    ExploreContainerComponent,
    IonSpinner,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    LeafletMapComponent,
  ],
})
export class VueWorksSitesPage implements OnInit {
  public title: string = 'Carte des Chantiers';
  public backBtn: string = 'Retour';
  public datas!: any[];
  map!: L.Map;

  constructor(
    private datasService: DatasService,
    public plt: Platform,
    public router: Router,
    private http: HttpClient
  ) {
    this.datasService.getWorksSitesAddress().subscribe((datas) => {
      if (datas) {
        this.datas = datas;
        this.addMarkers(this.datas);
      }
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }

  public async initMap() {
    this.map = new L.Map('map-id').setView([48.992128, 2.2779189], 15);

    const map = await L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
      }
    ).addTo(this.map);
    if (map) {
      console.log(this.datas, 'inside map');

      this.addMarkers(this.datas);
    }
  }

  // ngAfterViewInit() {
  //   console.log('inside afterviewchecked');
  // }
  public async addMarkers(datas: any) {
    // itérer dans le tableau et ajouter des markeurs
    console.log(this.datas);

    if (datas) {
      console.log(this.datas);

      datas.forEach((data: any) => {
        let marker = L.marker([data.acf.adresse.lat, data.acf.adresse.lng]);

        const DIV = `
        <div>
          <h5>${data.title.rendered}</h5>
          <h6>Date début : ${data.acf.date_debut}</h6>
          <h6>Date fin : ${data.acf.date_fin}</h6>
        </div>`;
        marker.bindPopup(DIV);
        if (this.map) {
          this.map.addLayer(marker);
        }
      });
    }
  }
}
