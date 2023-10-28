import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwipperPage } from '../../swipper/swipper.page';
import { DatasService } from 'src/app/service/datas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.page.html',
  styleUrls: ['./home-posts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SwipperPage],
})
export class HomePostsPage implements OnInit {
  public posts$!: Observable<any[]>;
  @Output() emitted = new EventEmitter();
  constructor(private datasService: DatasService) {}

  ngOnInit() {

    this.posts$ = this.datasService.getNewsPosts();
    if (this.posts$) {
      console.log(this.posts$);

      this.emitted.next('value');
    }
  }
}
