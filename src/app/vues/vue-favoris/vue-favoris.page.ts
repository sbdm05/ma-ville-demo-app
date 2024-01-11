import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vue-favoris',
  templateUrl: './vue-favoris.page.html',
  styleUrls: ['./vue-favoris.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VueFavorisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
