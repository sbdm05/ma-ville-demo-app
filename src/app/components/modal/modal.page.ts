import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonIcon } from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonIcon, DateFormatPipe]
})
export class ModalPage implements OnInit {

  @Input() marker!: any

  constructor() { }

  ngOnInit() {
    console.log(this.marker);

  }

}
