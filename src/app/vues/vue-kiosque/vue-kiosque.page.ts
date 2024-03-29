import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { DatasService } from 'src/app/service/datas.service';
import { forkJoin, Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonSpinner, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';

@Component({
  selector: 'app-vue-kiosque',
  templateUrl: './vue-kiosque.page.html',
  styleUrls: ['./vue-kiosque.page.scss'],
  standalone: true,
  imports: [
    //IonicModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonSpinner,
    CommonModule,
    FormsModule,
    RouterLink,
    ExploreContainerComponent,
    SkeletonPage
  ],
})
export class VueKiosquePage implements OnInit {
  public datas!: any;
  public colorBg = '#138088';
  public title: string= 'Kiosque'

  constructor(private datasService: DatasService) {
    console.log('from pageKiosquePogae');
  }

  ngOnInit() {
    this.datasService.getKiosquePosts().subscribe((data) => {
      // data is an array of observables, we need to combine them into a single array.

      this.datas = data;
      console.log(this.datas); // Now, this should be the actual array.
    });
  }
}
