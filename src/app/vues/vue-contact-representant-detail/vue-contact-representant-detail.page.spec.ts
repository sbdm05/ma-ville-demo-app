import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueContactRepresentantDetailPage } from './vue-contact-representant-detail.page';

describe('VueContactRepresentantDetailPage', () => {
  let component: VueContactRepresentantDetailPage;
  let fixture: ComponentFixture<VueContactRepresentantDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueContactRepresentantDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
