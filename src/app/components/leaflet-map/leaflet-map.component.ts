import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as L from 'leaflet';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements OnInit {
  constructor(
    public plt: Platform,
    public router: Router,
    private http: HttpClient
  ) {}

  map!: L.Map;

  ngOnInit() {
    console.log('testdepuis ion ng oninit');
  }

  ionViewDidEnter() {
    console.log('testdepuis ion view enter');

    this.plt.ready().then(() => {
      // this.http
      //   .get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
      //   .pipe(map((res) => res.json()))
      //   .subscribe((restaurants) => this.initMap(restaurants));

      this.initMap();
    });
  }

  public initMap() {
    this.map = new L.Map('map-id').setView([48.866667, 2.333333], 23);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      // attribution:
      //   '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }
}
