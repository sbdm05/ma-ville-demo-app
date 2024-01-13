import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DatasService } from 'src/app/service/datas.service';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
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
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';

@Component({
  selector: 'app-vue-post-details',
  templateUrl: './vue-post-details.page.html',
  styleUrls: ['./vue-post-details.page.scss'],
  standalone: true,
  imports: [
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
    IonSpinner,
    IonToolbar,
    CommonModule,
    FormsModule,
    ExploreContainerComponent,
    SkeletonPage
  ],
})
export class VuePostDetailsPage implements OnInit {
  public data: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private datasService: DatasService
  ) {}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.datasService.getPostDetails(id).subscribe({
          next: (data) => {
            console.log(data);
            this.data = data;
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    });
  }

  ngOnChanges() {

  }
}
