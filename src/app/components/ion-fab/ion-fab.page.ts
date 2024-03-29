import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ion-fab-icons',
  templateUrl: './ion-fab.page.html',
  styleUrls: ['./ion-fab.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonFab, IonFabButton, IonIcon],
})
export class IonFabPageIcons implements OnInit {
  @Input() iconName!: string;
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onClick() {
    console.log('test');
    this.clicked.emit();
  }
}
