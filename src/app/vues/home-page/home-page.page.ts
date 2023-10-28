import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePostsPage } from '../../components/home/home-posts/home-posts.page';
import { CategoriesPage } from 'src/app/components/categories/categories.page';
import { catHome } from 'src/app/shared/categories';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePostsPage,
    CategoriesPage,
  ],
})
export class HomePagePage implements OnInit {

  public categories = catHome;
  public confirmed!: any;

  public onData(value: Event){
    this.confirmed = value;
    console.log(this.confirmed);

  }

  constructor() {
    // console.log('depuis homepage');
  }

  ngOnInit() {}
}
