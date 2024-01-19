import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCategory]',
  standalone: true,
})
export class CategoryDirective {
  @Input() cat!: string;
  @HostBinding('class') classBadge!: string;

  constructor() {
    console.log('depuis constructr');
  }

  ngOnChanges() {
    console.log(this.cat);
    this.classBadge = `category-${this.cat}`
  }
}
