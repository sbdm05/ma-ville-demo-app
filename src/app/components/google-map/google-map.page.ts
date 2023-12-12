import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
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
export class GoogleMapPage {
  @ViewChild('citymap') mapRef!: ElementRef<HTMLElement>;
  @Input() datas!: any[];
  private api_key!: string;
  private newMap!: GoogleMap;
  public markers: any[] = [];
  //mapView: any;
  // isModalOpen = false;

  //@ViewChild('map') mapView!: ElementRef;

  constructor(private modalCtrl: ModalController, private platform: Platform) {}

  async createMap() {
    try {
      console.log(this.mapRef.nativeElement, 'MAPREF');
      this.newMap = await GoogleMap.create({
        id: 'citymap',
        element: this.mapRef.nativeElement,
        apiKey: 'AIzaSyAR7BRFO3RvtXBOZ0gohW-Gp_aFTzjsdIA',
        config: {
          center: {
            lat: 48.992128,
            lng: 2.2779189,
          },
          zoom: 12,
        },
      });

      console.log(this.mapRef.nativeElement, 'NEWMAP');
    } catch (error) {
      console.error('Error fetching or processing the map:', error);
      // Handle the error appropriately
    }

    // //window.alert('after this.newMap');

    // // on extrait les markers avec lat + lng
    // if (this.datas) {
    //   const countryCoordinates = this.datas.map((country) => ({
    //     lat: country.acf.adresse.lat,
    //     lng: country.acf.adresse.lng,
    //     title: country.acf.adresse.name,
    //     date_debut: country.acf.date_debut,
    //     date_fin: country.acf.date_fin,
    //   }));

    //   await this.addMarkers(countryCoordinates);

    //   this.newMap.setOnMarkerClickListener(async (clickedMarker) => {
    //     console.log(clickedMarker);
    //     console.log(this.markers);
    //     //window.alert('inside setOnMarker');

    //     // Find the corresponding marker reference in the array
    //     const selectedMarker = this.markers.find(
    //       (markerInfo) =>
    //         markerInfo.markerOptions.coordinate.lat ===
    //           clickedMarker.latitude &&
    //         markerInfo.markerOptions.coordinate.lng === clickedMarker.longitude
    //     );

    //     console.log(selectedMarker, 'test');

    //     const modal = await this.modalCtrl.create({
    //       component: ModalPage,
    //       componentProps: {
    //         marker: selectedMarker,
    //       },
    //       breakpoints: [0, 0.3],
    //       initialBreakpoint: 0.3,
    //     });
    //     console.log(modal, 'MODAL');
    //     await modal.present();
    //   });
    // }
  }

  // async addMarkers(countryCoordinates: any) {
  //   interface MarkerOptions {
  //     coordinate: {
  //       lat: any;
  //       lng: any;
  //     };
  //     title: any;
  //     date_debut?: any; // Make date property optional
  //     date_fin?: any;
  //     snippet?: any;
  //   }

  //   if (countryCoordinates) {
  //     //window.alert('coutrny');
  //     countryCoordinates.forEach(async (coord: any) => {
  //       console.log(coord, 'coord');
  //       const markerOptions: MarkerOptions = {
  //         coordinate: {
  //           lat: coord.lat,
  //           lng: coord.lng,
  //         },
  //         title: coord.title,
  //         snippet: coord.title,
  //         date_debut: coord.date_debut,
  //         date_fin: coord.date_fin,
  //       };

  //       const marker = await this.newMap.addMarker(markerOptions);

  //       // console.log(marker);// 0 /1

  //       // Store the marker reference in the array
  //       if (marker) {
  //         // window.alert('inside marker')
  //         this.markers.push({
  //           markerOptions,
  //         });
  //       }

  //       console.log(this.markers);
  //     });
  //   }
  // }

  ngAfterViewInit() {
    // The view, including the mapRef element, is available here.
    // You can safely access mapRef.nativeElement in this method.
    // console.log(this.mapRef.nativeElement);

    // Perform any operations related to the mapRef element here.
    //console.log(this.api_key);

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

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes, 'changes');
  // }

  ngOnDestroy() {
    // Clean up map reference
    //this.newMap.destroy();
  }
}
