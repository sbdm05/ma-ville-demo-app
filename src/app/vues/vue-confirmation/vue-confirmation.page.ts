import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-vue-confirmation',
  templateUrl: './vue-confirmation.page.html',
  styleUrls: ['./vue-confirmation.page.scss'],
  standalone: true,
  imports: [RouterLink, IonIcon, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, CommonModule, FormsModule, ExploreContainerComponent]
})
export class VueConfirmationPage implements OnInit {

  title= "confirmation"

  constructor() { }

  ngOnInit() {
  }

}
