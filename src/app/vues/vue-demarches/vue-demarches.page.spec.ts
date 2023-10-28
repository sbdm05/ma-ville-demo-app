import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueDemarchesPage } from './vue-demarches.page';

describe('VueDemarchesPage', () => {
  let component: VueDemarchesPage;
  let fixture: ComponentFixture<VueDemarchesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueDemarchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
