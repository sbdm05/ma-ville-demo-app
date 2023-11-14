import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueWorksSitesPage } from './vue-works-sites.page';

describe('VueWorksSitesPage', () => {
  let component: VueWorksSitesPage;
  let fixture: ComponentFixture<VueWorksSitesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueWorksSitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
