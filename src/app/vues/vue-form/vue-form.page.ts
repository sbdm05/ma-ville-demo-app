import { ApplicationRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormPage } from 'src/app/components/forms/form/form.page';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FormMessage } from 'src/app/types/form/form';
import { DatasService } from 'src/app/service/datas.service';

@Component({
  selector: 'app-vue-form',
  templateUrl: './vue-form.page.html',
  styleUrls: ['./vue-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FormPage],
})
export class VueFormPage implements OnInit {
  title!: string;
  obj!: FormMessage

  constructor(private activatedRoute: ActivatedRoute, private datasService: DatasService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.title = String(params.get('id'));
      console.log(this.title);
      this.obj = new FormMessage({category: this.title});
      console.log(this.obj, 'this.obj')
    });
  }

  submit(obj: FormMessage){
    console.log(obj);
    this.datasService.sendMessage(obj).subscribe(data=>{
      console.log(data);
      // redirection vers composant de confirmation
      this.router.navigate(['confirmation'])
    })
  }
}
