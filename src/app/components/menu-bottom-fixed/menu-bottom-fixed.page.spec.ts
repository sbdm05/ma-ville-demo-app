import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBottomFixedPage } from './menu-bottom-fixed.page';

describe('MenuBottomFixedPage', () => {
  let component: MenuBottomFixedPage;
  let fixture: ComponentFixture<MenuBottomFixedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuBottomFixedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
