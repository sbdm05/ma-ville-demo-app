import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
} from '@ionic/angular/standalone';

register();

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.page.html',
  styleUrls: ['./swipper.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonButton,
    IonCardTitle,
    IonCardContent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwipperPage implements OnInit {
  @Input() datas!: any[];
  @Output() onReadMoreEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(this.datas);
  }

  swiperSlideChange(event: Event) {
    console.log(event);
  }

  onReadMore(data: any) {
    console.log(data, 'data');

    this.onReadMoreEvent.next(data);
  }
}
