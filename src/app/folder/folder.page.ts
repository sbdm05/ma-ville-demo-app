import { Component, Inject, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, ExploreContainerComponent],
})
export class FolderPage implements OnInit {
  public folder!: string;


  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(()=>{
      // rediriger
      this.router.navigate(['home-page'], { replaceUrl: true });
    }, 1500)
  }

}
