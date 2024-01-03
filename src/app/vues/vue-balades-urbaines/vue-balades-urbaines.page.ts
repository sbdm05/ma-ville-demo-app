import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItinerairesService } from 'src/app/service/itineraires/itineraires.service';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonSpinner,
  IonTitle,
  IonToolbar,
  Platform,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vue-balades-urbaines',
  templateUrl: './vue-balades-urbaines.page.html',
  styleUrls: ['./vue-balades-urbaines.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonSpinner,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    CommonModule,
    FormsModule,
  ],
})
export class VueBaladesUrbainesPage implements OnInit {
  public title: string = 'Balades Urbaines';
  public categories!: any[];

  constructor(
    private itinerairesService: ItinerairesService,
    private router: Router
  ) {
    // this.itinerairesService
    //   .getAllItinerairesCategories()
    //   .pipe(switchMap((categoriesObservable) => categoriesObservable))
    //   .subscribe({
    //     next: (data) => {
    //       this.categories = data;
    //     },
    //     error: (e) => {
    //       console.log(e);

    //     },
    //   });

    this.itinerairesService.getAllSubItinerairesSubCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  public onDiscover(cat: any) {
    console.log(cat);

    this.router.navigate(['balades-urbaines', cat.id]);
  }

  ngOnInit() {}
}
