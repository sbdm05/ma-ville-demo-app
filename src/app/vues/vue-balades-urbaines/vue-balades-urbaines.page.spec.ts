import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueBaladesUrbainesPage } from './vue-balades-urbaines.page';

describe('VueBaladesUrbainesPage', () => {
  let component: VueBaladesUrbainesPage;
  let fixture: ComponentFixture<VueBaladesUrbainesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueBaladesUrbainesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
