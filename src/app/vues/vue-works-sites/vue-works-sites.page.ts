import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';

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
    DateFormatPipe,
    SkeletonPage
  ],
})
export class VueWorksSitesPage implements OnInit {
  public title: string = 'Carte des Chantiers';
  public backBtn: string = 'Retour';
  public datas!: any[];
  map!: L.Map;
  public mapId: string = 'map-work-sites';
  public loaded: boolean = false;

  constructor(
    private datasService: DatasService,
    public plt: Platform,
    public router: Router,
    private http: HttpClient
  ) {
    if (this.map) {
      this.map.remove();
      this.map.off();
    }

    this.datasService.getWorksSitesAddress().subscribe({
      next: (data) => {
        console.log(data);
        console.log('dans data');
        this.datas = data;
        this.initMap();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      //this.initMap();
    });
  }

  ngAfterViewInit() {
    //this.initMap();
  }

  public async initMap() {
    if (!this.map) {
      this.map = new L.Map(this.mapId).setView([48.992128, 2.2779189], 15);

      const map = await L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
        }
      ).addTo(this.map);
      if (map) {
        console.log(this.datas, 'inside map');

        await this.addMarkers(this.datas);
        this.loaded = true;
      }
    } else {
      console.log('already!!!');

      this.map.remove();
      this.map.off();
    }
  }

  // ngAfterViewInit() {
  //   console.log('inside afterviewchecked');
  // }
  public async addMarkers(datas: any) {
    // itérer dans le tableau et ajouter des markeurs
    console.log(datas);

    if (datas) {
      console.log(datas);

      datas.forEach((data: any) => {
        let marker = L.marker([data.acf.adresse.lat, data.acf.adresse.lng]);

        const year = data.acf.date_debut.slice(0, 4);
        const month = data.acf.date_debut.slice(4, 6);
        const day = data.acf.date_debut.slice(6, 8);

        const yearEnd = data.acf.date_fin.slice(0, 4);
        const monthEnd = data.acf.date_fin.slice(4, 6);
        const dayEnd = data.acf.date_fin.slice(6, 8);

        const DIV = `
        <div>
          <h5 style="font-weight: 900; font-size:1.5rem">${data.title.rendered}</h5>
          <h6>Date début : ${day} ${month} ${year}</h6>
          <h6>Date fin : ${dayEnd} ${monthEnd} ${yearEnd}</h6>
        </div>`;
        marker.bindPopup(DIV);

        if (this.map) {
          this.map.addLayer(marker);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
      this.map.off();
    }
  }
}
