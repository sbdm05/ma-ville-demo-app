import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonButton, IonInput, IonItem } from '@ionic/angular/standalone';
import { IconPage } from '../icons/icon/icon.page';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.page.html',
  styleUrls: ['./search-input.page.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonButton, CommonModule, FormsModule, IconPage],
})
export class SearchInputPage implements OnInit {
  public inputValue!: string;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit(inputValue: string) {
    console.log(this.inputValue);
    // check and sanitize the string before sending
    this.submitted.next(inputValue);
  }

  onInputChange() {
    console.log(this.inputValue);
    if (this.inputValue.length ===  0) {
      this.onSubmit('');
    }else{
      this.onSubmit(this.inputValue)
    }
  }
}
