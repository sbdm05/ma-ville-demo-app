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
  IonModal,
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
    IonModal,
  ],
})
export class ModalPage implements OnInit {
  @Input() marker!: any;
  @Input() placesToShop!: any;
  public title!: string;
  public colorToolbar!: string;
  constructor() {}

  ngOnInit() {
    console.log(this.placesToShop);
    if (this.placesToShop) {
      this.title = 'Annuaire';
      this.colorToolbar = 'dark';
    } else if (this.marker) {
      this.title = 'Chantiers';
      this.colorToolbar = 'warning';
    }
  }
}
