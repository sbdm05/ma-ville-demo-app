import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonSkeletonText,
    IonListHeader,
    IonThumbnail,
    IonList,
    IonItem,
    IonLabel
  ],
})
export class SkeletonPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
