import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
//import { IonicModule } from '@ionic/angular';
import { FormMessage } from 'src/app/types/form/form';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonModal,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonModal,
    IonTitle,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonTextarea,
    IonToolbar,
    IonList,
    CommonModule,
    ReactiveFormsModule,
  ],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => address),
  //     multi: true,
  //   }
})
export class FormPage implements OnInit {
  public form!: FormGroup;
  @Input() obj!: FormMessage;
  @Output() formValue: EventEmitter<FormMessage> =
    new EventEmitter<FormMessage>();

  public photos: any[] = [];

  public addPicActive: boolean = false;

  public isSending: boolean = false;

  constructor(private fb: FormBuilder) {}

  // TODO define une interface ou un model

  ngOnInit() {
    console.log(this.obj);
    if (this.obj) {
      this.form = this.fb.group({
        category: [this.obj.category, [Validators.required]],
        // subcategory: [this.obj.subcategory],
        address: [
          this.obj.address,
          [Validators.required, Validators.minLength(3)],
        ],
        description: [
          this.obj.description,
          [Validators.required, , Validators.minLength(3)],
        ],
        picture: [this.obj.picture],
        contact_name: [
          this.obj.contact?.name,
          [Validators.required, , Validators.minLength(3)],
        ],
        contact_firstname: [
          this.obj.contact?.firstname,
          [Validators.required, , Validators.minLength(3)],
        ],
        contact_mail: [
          this.obj.contact?.mail,
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        contact_tel: [
          this.obj.contact?.tel,
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
      });
    }
  }

  async onSelectPic() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    console.log(image, '[IMAGE ONSELECTPIC]');

    if (image.base64String) {
      //console.log(image.base64String, '[IMAGE.BASE64STRING');

      this.obj.picture = image;

      // pour affichage dans template HTML
      let imageConverted;
      imageConverted = 'data:image/jpeg;base64, ' + image.base64String;
      // disabled the add button
      this.addPicActive = true;
      // pusher l'image dans la boucle
      this.photos.unshift({
        src: imageConverted,
      });
    }
  }

  onDeletePic() {
    this.photos = [];
    this.addPicActive = false;
  }

  onSubmit() {
    console.log(this.obj.picture + `this.obj.picture`);

    this.isSending = true;

    const tempForm = this.form.value;
    tempForm.picture = this.obj.picture;
    console.log(tempForm);

    this.formValue.emit(tempForm);
  }

  ngOnDestroy() {
    this.isSending = false;
  }
}

// category!: string;
// subcategory!: string;
// address!: string;
// description!: string;
// contact!: {
//   name: string;
//   firstname: string;
//   mail: string;
//   tel: string;
// };

// sub-category: ['sous-category'],
// address : ['Rue du General Leclerc'],
// description: ['ici votre message']
