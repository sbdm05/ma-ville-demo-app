import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VuePostDetailsPage } from './vue-post-details.page';

describe('VuePostDetailsPage', () => {
  let component: VuePostDetailsPage;
  let fixture: ComponentFixture<VuePostDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VuePostDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
