import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonModal
} from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule,
    FormsModule,
    IonIcon,
    DateFormatPipe,
    IonModal
  ],
})
export class ModalPage implements OnInit {
  @Input() marker!: any;

  constructor() {}

  ngOnInit() {
    console.log(this.marker);
  }
}
