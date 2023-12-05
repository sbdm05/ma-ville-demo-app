import { Photo } from '@capacitor/camera';

export interface FormI {
  category: string,
  subcategory: string;
  address: string;
  description: string;
  picture: Photo;
  contact: {
    name:string;
    firstname: string;
    mail: string;
    tel: string;

  }
}
