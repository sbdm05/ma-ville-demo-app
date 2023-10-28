import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueConfirmationPage } from './vue-confirmation.page';

describe('VueConfirmationPage', () => {
  let component: VueConfirmationPage;
  let fixture: ComponentFixture<VueConfirmationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
