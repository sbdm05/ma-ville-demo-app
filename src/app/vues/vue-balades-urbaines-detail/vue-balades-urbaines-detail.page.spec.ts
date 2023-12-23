import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueBaladesUrbainesDetailPage } from './vue-balades-urbaines-detail.page';

describe('VueBaladesUrbainesDetailPage', () => {
  let component: VueBaladesUrbainesDetailPage;
  let fixture: ComponentFixture<VueBaladesUrbainesDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueBaladesUrbainesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
