import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormMessage } from 'src/app/types/form/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class FormPage implements OnInit {
  public form!: FormGroup;
  @Input() obj!: FormMessage;
  @Output() formValue: EventEmitter<FormMessage> =
    new EventEmitter<FormMessage>();

  constructor(private fb: FormBuilder) {}

  // TODO define une interface ou un model

  ngOnInit() {
    console.log(this.obj)
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
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.formValue.emit(this.form.value);
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
