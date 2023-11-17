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
import { ModalController } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { ModalPage } from '../modal/modal.page';
import { Platform } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ModalPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GoogleMapPage implements OnInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  @Input() datas!: any[];
  private api_key!: string;
  private newMap!: GoogleMap;
  public markers: any[] = [];
  // isModalOpen = false;

  constructor(private modalCtrl: ModalController, private platform: Platform) {}

  ngOnInit() {
    //this.createMap();
    console.log('dans init');
  }

  ngOnChanges() {}

  async createMap() {
    // on crée une carte
    console.log(this.api_key, 'test');

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
      if (countryCoordinates) {
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
      }

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

        console.log(selectedMarker, 'test'); // undefined

        const modal = await this.modalCtrl.create({
          component: ModalPage,
          componentProps: {
            marker: selectedMarker,
          },
          breakpoints: [0, 0.3],
          initialBreakpoint: 0.3,
        });
        console.log(modal, 'MODAL');
        await modal.present();
      });
    }
  }

  ngAfterViewInit() {
    // The view, including the mapRef element, is available here.
    // You can safely access mapRef.nativeElement in this method.
    // console.log(this.mapRef.nativeElement);

    // Perform any operations related to the mapRef element here.
    console.log(this.api_key);

    this.platform.ready().then(() => {
      console.log('platform is ready');

      if (this.platform.is('ios')) {
        console.log('inside ios');
        this.api_key = environment.GOOGLE_MAP_API_KEY_IOS;
        this.createMap();
      } else if (this.platform.is('android')) {
        console.log('inside android');
        this.api_key = environment.GOOGLE_MAP_API_KEY_ANDROID;
        this.createMap();
      } else {
        console.log('inside else');
        this.api_key = environment.GOOGLE_MAP_TEST;
        console.log(this.api_key);
        this.createMap();
      }
    });
  }
}
