import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueNotFoundPage } from './vue-not-found.page';

describe('VueNotFoundPage', () => {
  let component: VueNotFoundPage;
  let fixture: ComponentFixture<VueNotFoundPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueNotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
