import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueSignalPage } from './vue-signal.page';

describe('VueSignalPage', () => {
  let component: VueSignalPage;
  let fixture: ComponentFixture<VueSignalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueSignalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
