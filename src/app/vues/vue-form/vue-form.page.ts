import { ApplicationRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { FormPage } from 'src/app/components/forms/form/form.page';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FormMessage } from 'src/app/types/form/form';
import { DatasService } from 'src/app/service/datas.service';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { StorageCategoriesPreferenceService } from 'src/app/service/storage-categories-preference/storage-categories-preference.service';

@Component({
  selector: 'app-vue-form',
  templateUrl: './vue-form.page.html',
  styleUrls: ['./vue-form.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule,
    FormPage,
  ],
})
export class VueFormPage implements OnInit {
  title!: string;
  obj!: FormMessage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private datasService: DatasService,
    private router: Router,
    private sentEmailLocalStorage : StorageCategoriesPreferenceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.title = String(params.get('id'));
      console.log(this.title);
      this.obj = new FormMessage({ category: this.title });
      console.log(this.obj, 'this.obj');
    });
  }

  submit(obj: FormMessage) {
    console.log(obj);
    this.datasService.sendMessage(obj).subscribe(
      (data) => {
        if (data === 'Email sent successfully'){
          // store the info dans localStorage
          console.log(obj); // email sent successfully
          this.sentEmailLocalStorage.setData('email-sent', obj)
          this.router.navigate(['confirmation']);
        }
      },
      (error) => {
        if (error === 'Email sent successfully') {
          console.log('Email was sent successfully from the form!');
          // Handle success, navigate to confirmation page, etc.
          this.router.navigate(['confirmation']);
        } else {
          // Handle other cases if needed
          console.error('Error occurred:', error);
          // Handle error or display an error message if needed
        }
      }
    );
  }
}
