import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueShoppingDetailsCategoriesPage } from './vue-shopping-details-categories.page';

describe('VueShoppingDetailsCategoriesPage', () => {
  let component: VueShoppingDetailsCategoriesPage;
  let fixture: ComponentFixture<VueShoppingDetailsCategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueShoppingDetailsCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
