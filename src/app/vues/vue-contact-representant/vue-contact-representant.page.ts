import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
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
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vue-contact-representant',
  templateUrl: './vue-contact-representant.page.html',
  styleUrls: ['./vue-contact-representant.page.scss'],
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
    CommonModule,
    FormsModule,
  ],
})
export class VueContactRepresentantPage implements OnInit {
  public title: string = 'Vos élus';

  constructor(private router: Router) {}

  ngOnInit() {}

  onReadMore(arg: string) {
    console.log(arg);

    this.router.navigate(['contactez-details', arg]);
  }
}
