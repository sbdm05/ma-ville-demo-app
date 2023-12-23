import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import {
  IonRow,
  IonCol,
  IonGrid,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [
    // IonicModule,

    IonRow,
    IonCol,
    IonGrid,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class CategoriesPage implements OnInit {
  @Input() mainDatas!: any[];
  @Input() categoryDatas!: any[];
  categoryColors = ['#a10d59', '#0B555A', '#138088', '#909e30'];

  constructor(private router: Router) {}

  ngOnInit() {}

  public onCatNavigate(cat: any){
   const urlSegment = cat.url ? cat.url : cat.slug; // Choose between cat.url or cat.slug
   this.router.navigateByUrl('/' + urlSegment);
  }
}
