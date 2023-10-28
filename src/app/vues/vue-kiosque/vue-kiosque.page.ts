import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatasService } from 'src/app/service/datas.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-vue-kiosque',
  templateUrl: './vue-kiosque.page.html',
  styleUrls: ['./vue-kiosque.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class VueKiosquePage implements OnInit {
  public datas!: any;

  constructor(private datasService: DatasService) {
    console.log('from pageKiosquePogae');

  }

  ngOnInit() {
     this.datasService.getKiosquePosts().subscribe((data) => {
      // data is an array of observables, we need to combine them into a single array.
      forkJoin(data).subscribe((resolvedData) => {
        this.datas = resolvedData;
        console.log(this.datas); // Now, this should be the actual array.
      });
    });
  }
  }

