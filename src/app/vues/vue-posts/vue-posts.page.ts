import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatasService } from 'src/app/service/datas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vue-posts',
  templateUrl: './vue-posts.page.html',
  styleUrls: ['./vue-posts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class VuePostsPage implements OnInit {
  public datas$!: Observable<any[]>;

  constructor(private datasService: DatasService) {
    console.log('from pagePostsPogae');

  }

  ngOnInit() {
    this.datas$ = this.datasService.getNewsPosts();
  }
}
