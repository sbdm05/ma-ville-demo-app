import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueFormPage } from './vue-form.page';

describe('VueFormPage', () => {
  let component: VueFormPage;
  let fixture: ComponentFixture<VueFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
