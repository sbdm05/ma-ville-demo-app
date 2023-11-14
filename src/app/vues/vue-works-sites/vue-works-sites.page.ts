import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMapPage } from 'src/app/components/google-map/google-map.page';
import { DatasService } from 'src/app/service/datas.service';

@Component({
  selector: 'app-vue-works-sites',
  templateUrl: './vue-works-sites.page.html',
  styleUrls: ['./vue-works-sites.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, GoogleMapPage],
})
export class VueWorksSitesPage implements OnInit {
  public title: string = 'Carte des Travaux';
  public backBtn: string = 'Retour';
  public datas!: any[];

  constructor(private datasService: DatasService) {
    this.datasService.getWorksSitesAddress().subscribe((datas) => {
      console.log(datas);
      this.datas = datas;
    });
  }

  ngOnInit() {}
}
