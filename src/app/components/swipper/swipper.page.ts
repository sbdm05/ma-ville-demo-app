import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.page.html',
  styleUrls: ['./swipper.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwipperPage implements OnInit {
  @Input() datas!: any[];
  constructor() {}

  ngOnInit() {
    console.log(this.datas);

  }

  swiperSlideChange(event: Event) {
    console.log(event);
  }
}
