import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vue-not-found',
  templateUrl: './vue-not-found.page.html',
  styleUrls: ['./vue-not-found.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule]
})
export class VueNotFoundPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
