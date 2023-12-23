import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LeafletMapComponent } from 'src/app/components/leaflet-map/leaflet-map.component';
import * as L from 'leaflet';
import { ItinerairesService } from 'src/app/service/itineraires/itineraires.service';

@Component({
  selector: 'app-vue-balades-urbaines-detail',
  templateUrl: './vue-balades-urbaines-detail.page.html',
  styleUrls: ['./vue-balades-urbaines-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LeafletMapComponent],
})
export class VueBaladesUrbainesDetailPage implements OnInit {
  public id!: string;
  public datas!: any[];
  map!: L.Map;
  constructor(
    public plt: Platform,
    private activatedRoute: ActivatedRoute,
    private itinerairesService: ItinerairesService
  ) {}

  ngOnInit() {
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
              this.addMarkers(this.datas)
            }
            // this.categories = data;
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    });
  }

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

  public async addMarkers(datas: any[]) {

    const coordinates: any[] = []
    // itérer dans le tableau et ajouter des markeurs
    console.log(this.datas);

    if (datas) {
      console.log(this.datas);

      datas.forEach((data) => {
        let marker = L.marker([data.acf.adresse.lat, data.acf.adresse.lng]);

        const DIV = `
        <div>
          <h5>${data.title.rendered}</h5>
          <h6>Date début : ${data.acf.date_debut}</h6>
          <h6>Date fin : ${data.acf.date_fin}</h6>
        </div>`;
        marker.bindPopup(DIV);
        this.map.addLayer(marker);

        // Add coordinates to the array
        coordinates.push([data.acf.adresse.lat, data.acf.adresse.lng]);


      });

        const polyline = L.polyline(coordinates).addTo(this.map);
    }
  }
}
