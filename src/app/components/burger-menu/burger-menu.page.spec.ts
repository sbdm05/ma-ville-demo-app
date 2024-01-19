import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurgerMenuPage } from './burger-menu.page';

describe('BurgerMenuPage', () => {
  let component: BurgerMenuPage;
  let fixture: ComponentFixture<BurgerMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BurgerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
