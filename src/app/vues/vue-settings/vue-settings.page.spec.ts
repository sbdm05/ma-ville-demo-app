import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueSettingsPage } from './vue-settings.page';

describe('VueSettingsPage', () => {
  let component: VueSettingsPage;
  let fixture: ComponentFixture<VueSettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
