import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from 'src/app/components/header/header.page';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pharmacies-de-garde',
  templateUrl: './pharmacies-de-garde.page.html',
  styleUrls: ['./pharmacies-de-garde.page.scss'],
  standalone: true,
  imports: [ HeaderPage, IonContent, CommonModule, FormsModule]
})
export class PharmaciesDeGardePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
