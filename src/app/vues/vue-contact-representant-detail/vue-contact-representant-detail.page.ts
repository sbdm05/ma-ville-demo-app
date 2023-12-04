import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { contacts } from 'src/app/shared/categories';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vue-contact-representant-detail',
  templateUrl: './vue-contact-representant-detail.page.html',
  styleUrls: ['./vue-contact-representant-detail.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonText,
    CommonModule,
    FormsModule,
  ],
})
export class VueContactRepresentantDetailPage implements OnInit {
  public title = 'Contactez';
  public contacts = contacts;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const arg = params.get('arg');
      if (arg) {
        console.log(arg);
        this.title = arg;
      }
    });
  }
}
