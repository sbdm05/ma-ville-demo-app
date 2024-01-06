import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShooppingCategoriesPage } from './shoopping-categories.page';

describe('ShooppingCategoriesPage', () => {
  let component: ShooppingCategoriesPage;
  let fixture: ComponentFixture<ShooppingCategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShooppingCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
