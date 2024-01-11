import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueFavorisPage } from './vue-favoris.page';

describe('VueFavorisPage', () => {
  let component: VueFavorisPage;
  let fixture: ComponentFixture<VueFavorisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueFavorisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
