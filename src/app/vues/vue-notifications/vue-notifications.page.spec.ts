import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueNotificationsPage } from './vue-notifications.page';

describe('VueNotificationsPage', () => {
  let component: VueNotificationsPage;
  let fixture: ComponentFixture<VueNotificationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
