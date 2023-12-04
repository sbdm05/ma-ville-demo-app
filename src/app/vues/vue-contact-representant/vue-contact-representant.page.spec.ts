import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueContactRepresentantPage } from './vue-contact-representant.page';

describe('VueContactRepresentantPage', () => {
  let component: VueContactRepresentantPage;
  let fixture: ComponentFixture<VueContactRepresentantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueContactRepresentantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
