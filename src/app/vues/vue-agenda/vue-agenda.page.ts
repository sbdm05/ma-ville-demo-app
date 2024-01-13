import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgendaService } from 'src/app/service/agenda/agenda.service';
import { Observable } from 'rxjs';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBadge
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CategoryDirective } from 'src/app/shared/directives/category.directive';
import { IconPage } from 'src/app/components/icons/icon/icon.page';
import { SkeletonPage } from 'src/app/components/skeleton/skeleton.page';

@Component({
  selector: 'app-vue-agenda',
  templateUrl: './vue-agenda.page.html',
  styleUrls: ['./vue-agenda.page.scss'],
  standalone: true,
  imports: [
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
    IonCardContent,
    IonButton,
    CommonModule,
    FormsModule,
    IonBadge,
    CategoryDirective,
    IconPage,
    SkeletonPage
  ],
})
export class VueAgendaPage implements OnInit {
  public title: string = 'Agenda';
  public events$!: Observable<any>;

  constructor(private agendaService: AgendaService, private router: Router) {
    this.events$ = this.agendaService.getAllEvents();
  }

  ngOnInit() {}

  public onReadMore(id:number){
     this.router.navigate(['/', 'agenda', id], { replaceUrl: true });
  }
}
