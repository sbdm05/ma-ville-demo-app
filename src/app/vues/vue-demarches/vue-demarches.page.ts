import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { catHome } from 'src/app/shared/categories';
import { CategoriesPage } from 'src/app/components/categories/categories.page';

@Component({
  selector: 'app-vue-demarches',
  templateUrl: './vue-demarches.page.html',
  styleUrls: ['./vue-demarches.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CategoriesPage]
})
export class VueDemarchesPage implements OnInit {
  public title = 'Mes démarches';
  public category!: any


  constructor() { }

  ngOnInit() {
    this.category = catHome.filter(item => item.slug === 'mes-demarches');
    console.log(this.category[0].categories);

  }

}
