import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { IconPage } from '../icons/icon/icon.page';

@Component({
  selector: 'app-menu-bottom-fixed',
  templateUrl: './menu-bottom-fixed.page.html',
  styleUrls: ['./menu-bottom-fixed.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IconPage],
})
export class MenuBottomFixedPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
