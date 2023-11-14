import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { locations } from 'src/app/shared/categories';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GoogleMapPage implements OnInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  private api_key: string = environment.GOOGLE_MAP_API_KEY;
  // public markers = locations;
  public markers: any[] = [];
  @Input() datas!: any[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    //this.createMap();
    // console.log(this.datas);
  }

  async createMap() {
    // on crée une carte
    this.newMap = await GoogleMap.create({
      id: 'city-map',
      element: this.mapRef.nativeElement,
      apiKey: this.api_key,
      config: {
        center: {
          lat: 48.992128,
          lng: 2.2779189,
        },
        zoom: 12,
      },
    });

    // on extrait les markers avec lat + lng
    if (this.datas) {
      const countryCoordinates = this.datas.map((country) => ({
        lat: country.acf.adresse.lat,
        lng: country.acf.adresse.lng,
        title: country.acf.adresse.name,
        date_debut: country.acf.date_debut,
        date_fin: country.acf.date_fin,
      }));
      //this.markers = countryCoordinates;
      // console.log(this.markers);

      // Define an interface for marker options
      interface MarkerOptions {
        coordinate: {
          lat: any;
          lng: any;
        };
        title: any;
        date_debut?: any; // Make date property optional
        date_fin?: any;
        snippet?: any;
      }

      //
      countryCoordinates.forEach(async (coord) => {
        console.log(coord, 'coord');
        const markerOptions: MarkerOptions = {
          coordinate: {
            lat: coord.lat,
            lng: coord.lng,
          },
          title: coord.title,
          snippet: coord.title,
          date_debut: coord.date_debut,
          date_fin: coord.date_fin,
        };

        const marker = await this.newMap.addMarker(markerOptions);

        // console.log(marker);// 0 /1

        // Store the marker reference in the array
        if (marker) {
          this.markers.push({
            markerOptions,
          });
        }

        console.log(this.markers);
      });

      this.newMap.setOnMarkerClickListener(async (clickedMarker) => {
        console.log(clickedMarker);
        console.log(this.markers);

        // Find the corresponding marker reference in the array
        const selectedMarker = this.markers.find(
          (markerInfo) =>
            markerInfo.markerOptions.coordinate.lat ===
              clickedMarker.latitude &&
            markerInfo.markerOptions.coordinate.lng === clickedMarker.longitude
        );

        console.log(selectedMarker); // undefined

        const modal = await this.modalCtrl.create({
          component: ModalPage,
          componentProps: {
            marker: selectedMarker,
          },
          breakpoints: [0, 0.3],
          initialBreakpoint: 0.3,
        });
        modal.present();
      });
    }
  }

  ngAfterViewInit() {
    // The view, including the mapRef element, is available here.
    // You can safely access mapRef.nativeElement in this method.
    console.log(this.mapRef.nativeElement);

    // Perform any operations related to the mapRef element here.

    this.createMap();
  }
}
