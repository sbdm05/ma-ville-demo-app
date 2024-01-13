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
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSpinner
} from '@ionic/angular/standalone';
import { SkeletonPage } from '../../skeleton/skeleton.page';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.page.html',
  styleUrls: ['./home-posts.page.scss'],
  standalone: true,
  imports: [
    //IonicModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    CommonModule,
    FormsModule,
    SwipperPage,
    ExploreContainerComponent,
    IonSpinner,
    SkeletonPage
  ],
})
export class HomePostsPage implements OnInit {
  public posts$!: Observable<any[]>;
  public datasResolved!: any[]
  public datas!: [];
  @Output() emitted = new EventEmitter();
  constructor(
    private datasService: DatasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.datasService.getTest().subscribe(data=>{
    //   console.log(data, 'test');
    // })
  }

  ngOnInit() {
    this.posts$ = this.datasService.getNewsPosts();
    if (this.posts$) {
      console.log(this.posts$);

      this.emitted.next('value');
    }

    // use of the resolver
    // this.datasResolved = this.route.snapshot.data['posts'];
    // console.log(this.datasResolved);

  }

  onReadMoreDetails(obj: any) {
    // ici on récupère l'obj cliqué et on redirige vers vue-post-details/:id
    this.router.navigate(['/', 'actus', obj.id], { replaceUrl: true });
  }

  ngOnChanges() {
    console.log(this.datas);
  }
}
