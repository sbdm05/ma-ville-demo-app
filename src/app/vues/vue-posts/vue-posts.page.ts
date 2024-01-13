import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatasService } from 'src/app/service/datas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';

@Component({
  selector: 'app-vue-posts',
  templateUrl: './vue-posts.page.html',
  styleUrls: ['./vue-posts.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    SkeletonPage,
  ],
})
export class VuePostsPage implements OnInit {
  public datas$!: Observable<any[]>;
  public title: string = 'Actualités';

  constructor(private datasService: DatasService, private router: Router) {
    console.log('from pagePostsPogae');
  }

  ngOnInit() {
    this.datas$ = this.datasService.getNewsPosts();
  }

  public onReadMore(data: any) {
    this.router.navigate(['/', 'actus', data.id], { replaceUrl: true });
  }
}
