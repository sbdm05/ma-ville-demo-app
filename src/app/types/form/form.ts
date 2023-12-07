import { Photo } from '@capacitor/camera';
import { FormI } from './form-i';

export class FormMessage implements FormI {
  category!: string;
  subcategory!: string;
  address!: string;
  description!: string;
  picture!: Photo | string;
  contact!: {
    name: string;
    firstname: string;
    mail: string;
    tel: string;
  };
  constructor(obj?: Partial<FormMessage>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}


