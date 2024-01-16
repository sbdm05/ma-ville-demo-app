import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderPage } from 'src/app/components/header/header.page';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonToggle,
} from '@ionic/angular/standalone';
import { IconPage } from 'src/app/components/icons/icon/icon.page';
import { RouterLink } from '@angular/router';
import { OneSignalService } from 'src/app/service/one-signal/one-signal.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-vue-settings',
  templateUrl: './vue-settings.page.html',
  styleUrls: ['./vue-settings.page.scss'],
  standalone: true,
  imports: [
    HeaderPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonLabel,
    IonList,
    IonItem,
    IonThumbnail,
    IconPage,
    CommonModule,
    FormsModule,
    RouterLink,
    IonToggle,
  ],
})
export class VueSettingsPage implements OnInit {
  public currentStatusSub!: Subscription;
  public currentStatus!: boolean;

  public current: boolean = false;
  constructor(private notifService: OneSignalService) {
    this.currentStatus = this.notifService.getStatus();
    console.log(this.currentStatus);

  }

  ngOnInit() {}

  public onChange() {
    this.currentStatus = !this.currentStatus;
    this.notifService.changeStatus(this.currentStatus);
  }

  ngOnDestroy() {
    this.currentStatusSub.unsubscribe();
  }
}
